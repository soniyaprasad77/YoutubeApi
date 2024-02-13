/*  
 Steps to register a user
  1. Get data from frontend
  2. Validation: User not empty
  3. Check if user already exists ( username, email)
  4. Check for images, Check for avatars
  5. Upload them to Cloudinary (avatar)
  6. Create User Object (create entry in database)
  7. Remove password and refresh token field from response
  8. Check for User Creation
  9. return res
 */
import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import  uploadOnCloudinary  from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser = asyncHandler(async (req, res) => {
  const { username, fullName, email, password } = req.body;
  if (
    [fullName, username, email, password].some((field) => {
      field.trim() === "";
    })
  ) {
    throw new ApiError(400, "All fields are compulsory");
  }

  const existingUser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (existingUser) {
    throw new ApiError(409, "User with this email or username already exists");
  }

  const avatarLocalFiles = req?.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  if (!avatarLocalFiles) throw ApiError(400, "avatar is required");
  const avatar = await uploadOnCloudinary(avatarLocalFiles);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  if (!avatar) throw ApiError(400, "avatar is required");
  const user = await User.create({
    username: username.toLowerCase(),
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
  });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong in the server");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User Registered Successfully!"));
});

export { registerUser };
