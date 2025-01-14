import mongoose from "mongoose";
import "dotenv/config";

const PORT = process.env.PORT;
export async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODBURL);
    console.log("connected to DB")
  } catch (err) {
    console.log(err);
  }
}
