const mongoose = require("mongoose");

const bannerCustomerSchema = new mongoose.Schema(
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
        collection: "bannerCustomers",
    }
);

const model = mongoose.model("bannerCustomerSchema", bannerCustomerSchema);

module.exports = model;