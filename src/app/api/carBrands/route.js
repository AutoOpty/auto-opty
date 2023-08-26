// вызывается на HOME с помощью fetch и выдает весь список марок, который мэпается,образуя слайдера
import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Detail from "@/models/Detail";


export const GET = async (request) => {
    try {
        await connect();

        const data = await Detail.find();

        return new NextResponse(data, { status: 200 })

    } catch (error) {
        return new NextResponse("Database Error.", { status: 500 })
    }
}