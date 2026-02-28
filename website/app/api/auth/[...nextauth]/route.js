import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialsProvider from "next-auth/providers/credentials";
import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";

const handler = NextAuth({
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
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const sql = neon(process.env.DATABASE_URL);
          const users = await sql`SELECT * FROM users WHERE email = ${credentials.email}`;
          if (users.length === 0) return null;
          const user = users[0];
          const passwordMatch = await bcrypt.compare(credentials.password, user.password);
          if (!passwordMatch) return null;
          return {
            id: user.id,
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/Login",
  },
  callbacks: {
    async signIn({ user, account }) {
      // Save OAuth users (Google, GitHub) to database
      if (account.provider === "google" || account.provider === "github") {
        try {
          const sql = neon(process.env.DATABASE_URL);
          
          // Check if user already exists
          const existing = await sql`SELECT id FROM users WHERE email = ${user.email}`;
          
          if (existing.length === 0) {
            // Split name into first and last
            const nameParts = (user.name || "").split(" ");
            const firstName = nameParts[0] || "";
            const lastName = nameParts.slice(1).join(" ") || "";

            // Insert new OAuth user
            await sql`
              INSERT INTO users (first_name, last_name, email, password, designation, country)
              VALUES (${firstName}, ${lastName}, ${user.email}, ${null}, ${account.provider}, ${'Not specified'})
            `;
            console.log(`[Auth] New ${account.provider} user saved: ${user.email}`);
          }
        } catch (error) {
          console.error("Error saving OAuth user:", error);
        }
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };