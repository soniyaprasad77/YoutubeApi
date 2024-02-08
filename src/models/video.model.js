import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema({
 videoFile:{
  type:String,  //cloudinary URL
  required:true,
 },
 thumbnail:{
 type:String,  //coludinary URL
 required:true,
 },
 title:{
 type:String,
 required:true,
 },
 description:{
    type:String,
    
 },
 duration:{
    type:Number,
    required:true,
 },
 views:{
    type:Number,
    required:true,
    default:0,
 },
 isPublished:{
    type:Boolean,
    default:true,
 },
 owner:{
    type:Schema.Types.ObjectId,
    ref:"User",
 }
},{
    timestamps:true,
})

export const Video = mongoose.model("Video", videoSchema)