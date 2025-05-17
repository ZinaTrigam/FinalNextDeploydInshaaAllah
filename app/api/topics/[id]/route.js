import { connectMongoDB } from "@/libs/mongodb";
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


export async function PUT(request,  context) {
  const { id } = await context.params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request,  context) {
  const { id } = await context.params;
  const topic =   await Topic.findOne({_id: id});
  await connectMongoDB();
  return NextResponse.json({ topic }, { status: 200 });
}
