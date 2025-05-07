import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialsProvider from "next-auth/providers/credentials";
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'openid profile email',
        },
      },
      wellKnown: 'https://www.linkedin.com/oauth/.well-known/openid-configuration',
      idToken: true, // Disable ID token validation → force to use userinfo endpoint instead
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name || `${profile.given_name || ''} ${profile.family_name || ''}`.trim(),
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
        name: { label: "Name", type: "text" }, // Optional during login
        mode: { label: "Mode", type: "text" }, // <-- Add mode here too (login/signup)
      },
      async authorize(credentials) {
        const client = await pool.connect();
        try {
          const { email, password, name, mode } = credentials;
    
          const res = await client.query(
            'SELECT * FROM user_credentials WHERE email = $1',
            [email]
          );
          const user = res.rows[0];

          console.log(`User query result: ${JSON.stringify(user)}`);

          if (mode === 'signup') {
            if (user && user.provider_name !=="credentials") {
              throw new Error(JSON.stringify({ message: `Account already exists via ${user.provider_name}. Please use ${user.provider_name} to sign in.` }));
            } else if (user) {
              throw new Error(JSON.stringify({ message: 'Account already exists. Please log in instead.' }));
            }

            // Create new user
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(password, salt);

            const result = await client.query(
              `INSERT INTO user_credentials (email, name, password_hash, provider_name)
               VALUES ($1, $2, $3, 'credentials')
               RETURNING id, email, name`,
              [email, name, passwordHash]
            );

            const newUser = result.rows[0];

            return { id: newUser.id, email: newUser.email, name: newUser.name };
          }

          // mode === 'login'
          if (!user) {
            throw new Error(JSON.stringify({ message: 'No account found. Please sign up first.' }));
          }

          // Block social logins on credentials login
          if (user.provider_name && user.provider_name !== 'credentials') {
            throw new Error(JSON.stringify({ message: `Account already exists via ${user.provider_name}. Please use ${user.provider_name} to sign in.` }));
          }

          const isValid = await bcrypt.compare(password, user.password_hash);
          if (!isValid) {
            throw new Error(JSON.stringify({ message: 'Invalid credentials' }));
          }

          return { id: user.id, email: user.email, name: user.name };
        } finally {
          client.release();
        }
      }
    })
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      const client = await pool.connect();
      try {
        if (account.provider === 'credentials') {
          // Handled in authorize
          return true;
        }
        
        // OAuth sign in (works for all providers)
        const email = user.email;
        const name = user.name;
        const provider = account.provider;
        const provider_user_id = account.providerAccountId;
        
        // Basic validation
        if (!email) {
          console.error("Missing email from OAuth provider");
          return false;
        }

        // Check if user already exists
        const res = await client.query(
          'SELECT * FROM user_credentials WHERE email = $1',
          [email]
        );
        const existingUser = res.rows[0];

        if (existingUser) {
          return true;
        }

        // No user → Create new user
        await client.query(
          `INSERT INTO user_credentials (email, provider_name, provider_user_id, name) VALUES ($1, $2, $3, $4)`,
          [email, provider, provider_user_id, name]
        );

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      } finally {
        client.release();
      }
    },

    async session({ session, token, user }) {
      // Add provider information to session
      if (token.provider) {
        session.provider = token.provider;
        session.providerAccountId = token.providerAccountId;
      }
      
      // Ensure user email and name are available
      if (session.user) {
        session.user.email = token.email || session.user.email;
        session.user.name = token.name || session.user.name;
      }
      
      // For LinkedIn, add minimal provider info
      if (token.provider === 'linkedin') {
        session.user.provider = 'linkedin';
        session.user.providerId = token.providerAccountId;
      }
      
      return session;
    },

    async jwt({ token, user, account, profile }) {
      // Initial sign in
      if (account && user) {
        // Add provider data to token
        token.provider = account.provider;
        token.providerAccountId = account.providerAccountId;
        token.email = user.email;
        token.name = user.name;
        
        
        // Special handling for LinkedIn
        if (account.provider === 'linkedin') {
          // Accept the LinkedIn issuer in the token
          // This specifically addresses the "unexpected iss value" error
          token.iss = "https://www.linkedin.com";
          
          // Ensure we have email and name
          if (!token.email && profile?.email) {
            token.email = profile.email;
          }
          
          if (!token.name && profile?.name) {
            token.name = profile.name;
          } else if (!token.name && profile?.given_name && profile?.family_name) {
            token.name = `${profile.given_name} ${profile.family_name}`;
          }
        }
      }
      
      return token;
    }
  },

  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/Login',
    signup: '/signup',
    error: '/auth/error', // Add this to handle OAuth errors better
  },
  
  async redirect({ url, baseUrl }) {
    // Ensure to return a valid callback URL after OAuth or credentials login
    console.log("Redirecting to baseUrl:", baseUrl);
    if (url.startsWith(baseUrl)) return url;
    console.log("Redirecting to baseUrl:", baseUrl);
    return baseUrl;  // Or redirect to a custom URL like '/HomePage'
  },

 
    jwt: {
      // These settings help with handling LinkedIn's OIDC token
      decode: async ({ token, secret }) => {
        return token;
      },
    },
  
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };