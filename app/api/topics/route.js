import  { connectMongoDB } from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://102.211.210.151:3100',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

export async function POST(request){
    const { title, description } = await request.json();
    await connectMongoDB();
    await Topic.create({title, description});
    return NextResponse.json ({message:"Topic Created"}, { status: 201});
}
export async function GET(){
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json ({ topics });
}
 export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "Topic deleted"}, { status: 200});
}