// выдает список всех моделей выбранной марки с вложенными списками кузовов для каждой модели

import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Detail from "@/models/Detail";


export const GET = async (request, { params }) => {
    try {
        await connect();

        const data = await Detail.find(params);

        return new NextResponse(JSON.stringify(data), { status: 200 })

    } catch (error) {
        return new NextResponse("Database Error.", { status: 500 })
    }
}