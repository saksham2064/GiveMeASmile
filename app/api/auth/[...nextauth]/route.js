import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure only GitHub provider
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  // Use JWT for session
  session: {
    strategy: "jwt",
  },

  // Secret for encryption
  secret: process.env.NEXTAUTH_SECRET,
};

// NextAuth handler for App Router
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
