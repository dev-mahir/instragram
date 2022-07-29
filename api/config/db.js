import mongoose from "mongoose";

// MongoDB String 
const URL = process.env.MONGODB_URL || "mongodb://localhost:27017/Full-Api"

// create a mongoDB connection 
const connectDB = async() => {
    const connection = await mongoose.connect(URL);
    console.log(`mongoDB connected successfully.`.bgMagenta.black);
}

// export mongo connection 

export default connectDB;