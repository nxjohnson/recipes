import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)