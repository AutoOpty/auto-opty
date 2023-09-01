// выдает список запчастей по кузову
import Detail from "@/models/Detail";
import connect from "@/utils/db"
import { NextResponse } from "next/server"


export const GET = async (request) => {
    try {
        await connect();
        const data = await Detail.find()
        return new NextResponse(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new NextResponse("DataBase Error", { status: 500 })
    }
}