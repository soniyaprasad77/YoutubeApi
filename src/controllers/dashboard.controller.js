import mongoose from "mongoose";
import { Video } from "../models/video.model.js";
import { Subscription } from "../models/subscription.model.js";
import { Like } from "../models/like.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getChannelStats = asyncHandler(async (req, res) => {
    const { channelId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(channelId)) {
        throw new ApiError(400, "Invalid channel ID");
    }

    const totalVideos = await Video.countDocuments({ channelId });
    const totalViews = await Video.aggregate([
        { $match: { channelId: mongoose.Types.ObjectId(channelId) } },
        { $group: { _id: null, totalViews: { $sum: "$views" } } },
    ]);
    const totalLikes = await Like.countDocuments({ channelId });
    const totalSubscribers = await Subscription.countDocuments({ channelId });

    const stats = {
        totalVideos,
        totalViews: totalViews[0] ? totalViews[0].totalViews : 0,
        totalLikes,
        totalSubscribers,
    };

    res.status(200).json(new ApiResponse(200, "Channel stats retrieved successfully", stats));
});
const getChannelVideos = asyncHandler(async (req, res) => {
    const { channelId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(channelId)) {
        throw new ApiError(400, "Invalid channel ID");
    }

    const videos = await Video.find({ channelId }).sort({ createdAt: -1 });

    res.status(200).json(new ApiResponse(200, "Channel videos retrieved successfully", videos));
});



export { getChannelStats, getChannelVideos };
