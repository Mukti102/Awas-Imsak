import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: "123789",
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credential",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email === "abdulmukti123@gmail.com" && password === "123789") {
          return {
            id: 1,
            name: "abdulmukti123",
            email: "abdulmukti@email.com",
            role: "admin",
          } as any;
        } else null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account.provider === "credentials") {
        token.email = user.email;
        token.fullName = user.fullName;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullName" in token) {
        session.user.fullName = token.fullName;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
