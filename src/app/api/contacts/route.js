import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Contact from "@/models/Contact"

// Name must be route.js
export const GET = async (request) => {

    // Fetch
    try{
        // From utils/db.js
        await connect()
        // If there's a username, search for the username.
        // If no, search for all the data.
        const contacts = await Post();
        return new NextResponse(JSON.stringify(contacts), {
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
    const newContact = new Contact(body)

    // Fetch
    try{
        // From utils/db.js
        await connect()
        await newContact.save()

        return new NextResponse("Contact has been created", {
            status: 201
        })
    }catch (err){
        return new NextResponse("Database Error", {
            status: 500,
        })
    }
}