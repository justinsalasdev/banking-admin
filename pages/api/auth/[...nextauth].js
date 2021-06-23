import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers

  providers: [
    Providers.Credentials({
      async authorize(credentials, req) {
        const { email, password } = credentials;

        if (
          email === process.env.ADMIN_EMAIL &&
          password === process.env.ADMIN_PASSWORD
        ) {
          // Any object returned will be saved in `user` property of the JWT
          return { email };
        } else {
          // If you return null or false then the credentials will be rejected
          // return null;
          // // You can also Reject this callback with an Error or with a URL:
          return null;
          // throw new Error("wrong email or password"); // Redirect to error page
          //error message will be available to router.query.error
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      }
    })
  ],

  pages: {
    // signIn: "/auth/signin",
    // signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: null // If set, new users will be directed here on first sign in
  }

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL
});
