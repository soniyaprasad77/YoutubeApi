import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload file on Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File is uploaded on Cloudinary", response.url);
    return response;
  } catch (error) {
    // Handle error
    console.error("Error uploading file to Cloudinary:", error.message);
    // remove the locally saved temporary files as the upload operation got failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export default uploadOnCloudinary;
