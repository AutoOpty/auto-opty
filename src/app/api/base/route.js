// выдает список всех запчастей, добавленных в БД
import Detail from "@/models/Detail";
import connect from "@/utils/db"
import { NextResponse } from "next/server"


export const GET = async (request) => {
    // для получения значения username из url
    const url = new URL(request.url);
    const username = url.searchParams.get("username");
    try {
        await connect();
        const data = await Detail.find(username && { username })

        return new NextResponse(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new NextResponse("DataBase Error", { status: 500 })
    }
}


export const POST = async (request) => {
    const body = await request.json();

    const newDetail = new Detail(body);

    try {
        await connect();
        await newDetail.save();

        return new NextResponse("Detail has been created.", { status: 201 })
    } catch (err) {
        return new NextResponse(err, { status: 500 })
    }
}