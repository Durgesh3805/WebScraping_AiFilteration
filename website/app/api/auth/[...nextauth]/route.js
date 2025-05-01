import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialsProvider from "next-auth/providers/credentials";

// Define the authOptions object
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        Name: { label: "Name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { Name, email, password } = credentials;
    
        if (!email || !password) {
          throw new Error("Missing email or password");
        }
    
        // 🔥 Fetch user from database
        const existingUser = await fetchYourUserFromDatabase(email);
    
        if (!existingUser) {
          throw new Error("No user found, please sign up");
        }
    
        // 🔥 Verify password
        const isValidPassword = await verifyPassword(password, existingUser.hashedPassword);
        if (!isValidPassword) {
          throw new Error("Invalid password");
        }
    
        // 🎯 User authenticated
        return {
          id: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent", // 🔥 FORCE Google to always ask "Continue"
        },
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      authorization: {
        url: "https://www.linkedin.com/oauth/v2/authorization",
        params: { scope: "openid profile w_member_social email" },
      },
      token: "https://www.linkedin.com/oauth/v2/accessToken",
      userinfo: {
        url: "https://api.linkedin.com/v2/me",
        params: {
          projection: "(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))",
        },
      },
      async profile(profile, tokens) {
        const emailResponse = await fetch(
          "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
          { headers: { Authorization: `Bearer ${tokens.access_token}` } }
        );
        const emailData = await emailResponse.json();

        return {
          id: profile.id,
          name: `${profile.localizedFirstName} ${profile.localizedLastName}`,
          email: emailData?.elements?.[0]?.["handle~"]?.emailAddress,
          image: profile.profilePicture?.["displayImage~"]?.elements?.[0]?.identifiers?.[0]?.identifier,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      const { email, name, image } = user;
      const { provider, providerAccountId } = account;

      if (!email) {
        console.error("Email missing!");
        return false; // deny sign-in
      }

      user.provider = provider;
      user.providerAccountId = providerAccountId;
      console.log("User after signIn:", user);
      return true;
    },

    async jwt({ token, user, account, profile }) {
      if (account) {
        token.provider = account.provider;
        token.providerAccountId = account.providerAccountId;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.provider = token.provider;
      session.user.providerAccountId = token.providerAccountId;
      return session;
    },

    async redirect({ baseUrl }) {
      return `${baseUrl}/Password`; // Redirect to set-password page
    },
  }
};

// Named export for GET and POST
export async function GET(req, res) {
  return NextAuth(req, res, authOptions);
}

export async function POST(req, res) {
  return NextAuth(req, res, authOptions);
}
