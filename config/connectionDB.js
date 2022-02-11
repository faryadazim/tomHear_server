import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DB_URL = process.env.DB_URL; 



const connectDb = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected Succesfully");
  } catch (error) {
    console.log("Error while connecting", error.message);
  }
};
export default connectDb;