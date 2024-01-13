import { NextResponse } from "next/server";
import connectDB from "@/helpers/connectDB";
import Detail from "@/models/Detail";


export const GET = async (request, { params }) => {

  const { id } = params;
  try {
    await connectDB();

    const data = await Detail.findById(id);

    return new NextResponse(JSON.stringify(data), { status: 200 })

  } catch (error) {
    return new NextResponse(error, { status: 500 })
  }
}

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connectDB();

    await Detail.findByIdAndDelete(id);

    return new NextResponse("Detail has been deleted.", { status: 200 })

  } catch (error) {
    return new NextResponse(error, { status: 500 })
  }
}


export const PUT = async (request, { params }) => {
  const { id } = params;
  const incomingData = await request.json();

  try {
    await connectDB();

    const updatedDetail = await Detail.findByIdAndUpdate(id, incomingData);

    if (!updatedDetail) {
      return new NextResponse("Detail not found", { status: 404 });
    }

    return new NextResponse("Detail has been updated", { status: 200 });

  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};


export const PATCH = async (request, { params }) => {
  const { id } = params;
  const incomingData = await request.json();

  try {
    await connectDB();

    const updatedDetail = await Detail.findByIdAndUpdate(id, incomingData);

    if (!updatedDetail) {
      return new NextResponse("Detail not found", { status: 404 });
    }
    return new NextResponse("Detail has been updated", { status: 200 });

  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};