import mongoose from "mongoose";

export async function connectDb() {
  try {
    const mongoUrl = process.env.MONGODB_URL;
    if (!mongoUrl) {
      throw new Error("MONGODB_URL environment variable is not set");
    }
    await mongoose.connect(mongoUrl);

    console.log("Database connected successfully");

    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to database");
    });

    mongoose.connection.on("error", (err) => {
      console.error(`Mongoose connection error: ${err}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose disconnected");
    });
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`);
    process.exit(1);
  }
}
