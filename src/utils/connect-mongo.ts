import mongoose, { connection } from "mongoose";

// Connects to the database and stores the connection in cache to avoid multiple connections

const MONGO_URI = process.env.MONGO_URI as string;

const cached: {
  connection?: typeof mongoose;
  promise?: Promise<typeof mongoose>;
} = {};

async function connectMongo(): Promise<typeof mongoose> {
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in the .env file");
  }

  // If a connection already exists, return it
  if (cached.connection) {
    return cached.connection;
  }

  // If no connection or promise exists, create a new connection promise
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      bufferCommands: false,
    });
  }

  try {
    cached.connection = await cached.promise;
    console.log("Connected to MongoDB");
  } catch (error) {
    cached.promise = undefined;
    console.error("Error connecting to MongoDB", error);
    throw error;
  }

  return cached.connection;
}

export default connectMongo;
