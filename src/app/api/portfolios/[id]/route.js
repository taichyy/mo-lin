import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Portfolios from "@/models/Portfolios"

// Name must be route.js
export const DELETE = async (request ,{params}) => {

    const {id} = params

    // Fetch
    try{
        // From utils/db.js
        await connect()
        await Portfolios.findByIdAndDelete(id)

        return new NextResponse("Portfolios has been deleted", {
            status: 200
        })
    }catch (err){
        return new NextResponse("Database Error", {
            status: 500,
        })
    }
}

export const PUT = async (request ,{params}) => {

    const {id} = params
    const body = await request.json()

    // Fetch
    try{
        // From utils/db.js
        await connect()
        await Portfolios.findByIdAndUpdate(id, body)

        return new NextResponse("Portfolios has been deleted", {
            status: 200
        })
    }catch (err){
        return new NextResponse("Database Error", {
            status: 500,
        })
    }
}