import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const URI = process.env.MONGODB_URI;

    if (!URI) {
      throw new Error("MongoDB URI is undefined");
    }
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
