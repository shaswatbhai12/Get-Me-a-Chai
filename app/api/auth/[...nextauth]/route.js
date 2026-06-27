import NextAuth from "next-auth";
// import Apple from "next-auth/providers/apple";
// import Google from "next-auth/providers/google";
// import Facebook from "next-auth/providers/facebook";
// import Email from "next-auth/providers/email";
import Github from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";

export const authoptions = NextAuth({
    providers: [ 
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // Apple({
        //     clientId: process.env.APPLE_ID,
        //     clientSecret: process.env.APPLE_SECRET
        // }),
        // Facebook({
        //     clientId: process.env.FACEBOOK_ID,
        //     clientSecret: process.env.FACEBOOK_SECRET
        // }),
        // Google({
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET
        // }),
        // Email({
        //     server: process.env.MAIL_SERVER,
        //     from: 'shaswatkumar9868@gmail.com'
        // })
    ],
    callbacks: {
        async signIn({user, account, profile, email, credentials }){
            if(account.provider == "github"){
                if(mongoose.connection.readyState !==1){
                     await mongoose.connect("mongodb://localhost:27017/chai")
            }
                const targetEmail = user.email || profile.email || `${user.name || profile.login || "user"}@github.private`;
                const targetUsername = user.name || profile.login || "github_user";
                const currentUser = await User.findOne({email: targetEmail})
                if(!currentUser){
                    const newUser = new User({
                        email: targetEmail,
                        username: targetEmail.includes("@") ? targetEmail.split("@")[0] : targetUsername
                    })
                    await newUser.save()
                    user.name = newUser.username
                }
                
                return true
            }
        },
        async session({ session, user, token}){
            const dbUser = await User.findOne({email: session.user.email})
            session.user.name = dbUser.username
            return session
        }
    }
})

export { authoptions as GET, authoptions as POST}