import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENTID || "",
      clientSecret: process.env.GITHUB_CLIENTSECRETS || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID || "",
      clientSecret: process.env.GOOGLE_CLIENTSECRETS || "",
    }),
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials, req) {
        try {
          const response = await fetch("http://localhost:3001/api/v1/auth/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const data = await response.json();

          const {
            data: { user },
          } = data;
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },

      credentials: {},
    }),
  ],

  pages: {
    signIn: "/auth/signin",
    // signOut: "/auth/signout",
    // error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});
