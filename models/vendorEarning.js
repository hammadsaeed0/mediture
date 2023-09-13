const mongoose = require("mongoose");

const vendorRatingSchema = new mongoose.Schema(
    {
        bookingId: {
            type: String,
            required: false,
        },
        doctor: {
            type: String,
            required: false
        },
        amount: {
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
