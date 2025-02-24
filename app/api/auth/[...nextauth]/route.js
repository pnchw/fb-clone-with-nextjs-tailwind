import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt", // Ensure JWT strategy is used
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl; // Redirect to home page after login
    },
  },
};

// NextAuth handler for App Router
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // Export for GET & POST requests