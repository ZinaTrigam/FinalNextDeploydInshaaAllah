import { connectMongoDB } from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

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
