import NextAuth from "next-auth/next";
import connect from "@/utils/db";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import User from "@/models/User";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials){
                await connect()

                try{
                    const user = await User.findOne({email: credentials.email})
                    if(user){
                        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
                        if(isPasswordCorrect) {
                            return user
                        }else{
                            throw new Error("Wrong credentials!")
                        }
                    }else{
                        throw new Error("User not found")
                    }
                }catch(err){
                    throw new Error(err)
                }
            }
        })
    ],
    pages:{
        error: "/dashboard/login"
    }
})

export { handler as GET, handler as POST}