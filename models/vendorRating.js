const mongoose = require("mongoose");

const vendorRatingSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            required: false,
        },
        vendorName: {
            type: String,
            required: false
        },
        orderName: {
            type: String,
            required: false,
        },
        rating: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: false,
            default: "pending"
        },
        // image: { type: String, required: false },
    },
    {
        collection: "vendorRatings",
    }
);

const model = mongoose.model("vendorRatingSchema", vendorRatingSchema);

module.exports = model;
