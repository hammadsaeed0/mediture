const mongoose = require("mongoose");

const labelSchema = new mongoose.Schema(
    {
        labelName: {
            type: String,
            required: false,
        },
        labelDeliveryBoy: {
            type: String,
            required: false,
        },
        labelVendor: {
            type: String,
            required: false,
        },
        labelAdmin: {
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
        collection: "labels",
    }
);

const model = mongoose.model("labelSchema", labelSchema);

module.exports = model;