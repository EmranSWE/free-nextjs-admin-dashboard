import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Your-name",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Your-passwordS",
        },
      },
      async authorize(credentials, req) {
        // Handle authentication logic here
        try {
          const user = { id: "42", name: "Emran", password: "nextauth" };

          if (credentials?.username === user.name && credentials?.password === user.password) {
            // Successful authentication
            return Promise.resolve(user);
          } else {
            // Unsuccessful authentication
            return Promise.resolve(null);
          }
        } catch (error) {
          // Handle any errors during authentication
          return Promise.resolve(null);
        }
      },
    }),
  ],
};