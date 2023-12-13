
import { config } from 'dotenv';
config();
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";





export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },     
      
    }),

    // CredentialsProvider({
    //   credentials: {
    //     email: {
    //       label: "email",
    //       type: "text",
    //       placeholder: "insira seu email",
    //     },
    //     password: { label: "Password", type: "password" },
    //   },

    //   async authorize(credentials) {
    //     const user = {
    //       id: "1",
    //       name: "Isaell",
    //       email: "test@example.com",
    //       password: "test123",
    //     };

    //     if (
    //       user &&
    //       user?.email === credentials?.email &&
    //       user?.password === credentials?.password
    //     ) {
    //       return user;
    //     }

    //     return null;
    //   },
    // }),
  ],
  secret: process.env.SECRET,  
 
};

