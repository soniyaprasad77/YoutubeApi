import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
const app = express();
dotenv.config({
  path: "./env",
});

connectDB();
// ;(
//   //using IIFEs

//   async () => {
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//       app.on("error", (error) => {
//         console.log("Error", error);
//         throw error;
//       });

//       app.listen(process.env.PORT, () => {
//         console.log(`App listening on ${process.env.PORT}`);
//       });
//     } catch (error) {
//       console.log("error is : ", error);
//       throw error;
//     }
//   }
// )();
