import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"

// Name must be route.js
export const GET = async (request ,{params}) => {

    const {id} = params

    // Fetch
    try{
        // From utils/db.js
        await connect()
        const post = await Post.findById(id)
        return new NextResponse(JSON.stringify(post), {
            status: 200
        })
    }catch (err){
        return new NextResponse("Database Error", {
            status: 500,
        })
    }
}


export const DELETE = async (request ,{params}) => {

    const {id} = params

    // Fetch
    try{
        // From utils/db.js
        await connect()
        await Post.findByIdAndDelete(id)

        return new NextResponse("Post has been deleted", {
            status: 200
        })
    }catch (err){
        return new NextResponse("Database Error", {
            status: 500,
        })
    }
}