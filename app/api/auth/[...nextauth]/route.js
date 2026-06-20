import NextAuth from "next-auth";
// import Apple from "next-auth/providers/apple";
// import Google from "next-auth/providers/google";
// import Facebook from "next-auth/providers/facebook";
// import Email from "next-auth/providers/email";
import Github from "next-auth/providers/github";

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
                const client = await mongoose.connect()
                // const currentUser = await client.db("users").collection("users").findOne({email: email})
            }
        }
    }
})

export { authoptions as GET, authoptions as POST}