const mongoose = require("mongoose");

const doctorRatingSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            required: false,
        },
        doctorName: {
            type: String,
            required: false,
        },
        booking: {
            type: String,
            required: false,
        },
        rating: {
            type: String,
            required: false
        },
        status: {
            type: String,
            required: false,
            default: "pending"
        },
        // image: { type: String, required: false },
    },
    {
        collection: "doctorRating",
    }
);

const model = mongoose.model("doctorRatingSchema", doctorRatingSchema);

module.exports = model;