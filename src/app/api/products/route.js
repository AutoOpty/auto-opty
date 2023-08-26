// выдает список запчастей по кузову


import { NextResponse } from "next/server"


export const GET = async (request) => {

    return new NextResponse("Here we will see all details.", { status: 200 })
}