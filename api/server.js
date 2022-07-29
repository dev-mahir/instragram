import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from 'path'
import cookieParser from "cookie-parser";

import studentRoute from "./routes/student.js";
import userRoute from "./routes/user.js";

import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";

// init express
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

// env config
const env = dotenv.config();

// init env variables
const PORT = process.env.PORT || 5000;

// routes
app.use("/api/student", studentRoute);
app.use("/api/user", userRoute);

// express error handler
app.use(errorHandler);

// listen server
app.listen(PORT, () => {
    connectDB();
    console.log(`server is running at http://localhost:${PORT}`.bgGreen.black);
});
