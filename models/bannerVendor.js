const mongoose = require("mongoose");

const bannerVendorSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: false,
        },
        title: {
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
        collection: "bannerVendors",
    }
);

const model = mongoose.model("bannerVendorSchema", bannerVendorSchema);

module.exports = model;
