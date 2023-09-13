const mongoose = require("mongoose");

const bannerHomeSchema = new mongoose.Schema(
    {
        image: {
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
        collection: "bannerHomes",
    }
);

const model = mongoose.model("bannerHomeSchema", bannerHomeSchema);

module.exports = model;