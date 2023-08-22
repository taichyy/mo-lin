import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Portfolios from "@/models/Portfolios"

// Name must be route.js
export const GET = async (request) => {

    const url = new URL(request.url)

    // Fetch
    try{
        // From utils/db.js
        await connect()
        // If there's a username, search for the username.
        // If no, search for all the data.
        const works = await Portfolios.find()
        return new NextResponse(JSON.stringify(works), {
            status: 200
        })
    }catch (err){
        return new NextResponse("Database Error", {
            status: 500,
        })
    }
}

// export const POST = async (request) => {

//     const body = await request.json()
//     const newPost = new Post(body)

//     // Fetch
//     try{
//         // From utils/db.js
//         await connect()
//         await newPost.save()

//         return new NextResponse("Post has been created", {
//             status: 201
//         })
//     }catch (err){
//         return new NextResponse("Database Error", {
//             status: 500,
//         })
//     }
// }