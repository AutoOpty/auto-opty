import { NextResponse } from 'next/server';
import connectDB from '@/helpers/connectDB';
import Detail from '@/models/Detail';

export const GET = async (request) => {
  try {
    await connectDB();

    const data = await Detail.find();

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error.', { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newDetail = new Detail(body);

  try {
    await connectDB();
    await newDetail.save();

    return new NextResponse('Detail has been created.', { status: 201 });
  } catch (err) {
    return new NextResponse(err, { status: 500 });
  }
};