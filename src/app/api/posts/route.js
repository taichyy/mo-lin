import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"

// Name must be route.js
export const GET = async (request) => {

    const url = new URL(request.url)
    // Get username from URL
    const username = url.searchParams.get("username")

    // Fetch
    try{
        // From utils/db.js
        await connect()
        // If there's a username, search for the username.
        // If no, search for all the data.
        const posts = await Post.find(username && {username})
        return new NextResponse(JSON.stringify(posts), {
            status: 200
        })
    }catch (err){
        return new NextResponse("Database Error", {
            status: 500,
        })
    }
}

export const POST = async (request) => {

    const body = await request.json()
    const newPost = new Post(body)

    // Fetch
    try{
        // From utils/db.js
        await connect()
        await newPost.save()

        return new NextResponse("Post has been created", {
            status: 201
        })
    }catch (err){
        return new NextResponse("Database Error", {
            status: 500,
        })
    }
}