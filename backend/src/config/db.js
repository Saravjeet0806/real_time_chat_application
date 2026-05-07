import mongoose from 'mongoose';
import config from './config.js';

const MONGO_URI = config.MONGO_URI;

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Mongoose connected to MongoDB");
  } catch (err) {
    console.error("Connection error:", err);
  }
}

export default connectDB;
