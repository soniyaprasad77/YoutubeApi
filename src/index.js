import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
  path: "./env",
});


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server running at ${process.env.PORT || 8000}`);
    });    
  })
  .catch((err) => {
    console.log("MongoDB connection failed");
  });
