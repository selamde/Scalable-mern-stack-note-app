import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected sucessfully");
  } catch (error) {
    console.log("Error connecting to the server");
  }
};
