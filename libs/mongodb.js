import mongoose from 'mongoose';
//MONGODB_URI = "mongodb+srv://zina:zitri1992@cluster0.d8ktj7l.mongodb.net";

export async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}