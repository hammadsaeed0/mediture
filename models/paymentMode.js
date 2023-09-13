const mongoose = require("mongoose");

const paymentModeSchema = new mongoose.Schema(
    {
        paymentName: {
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
        collection: "paymentModes",
    }
);

const model = mongoose.model("paymentModeSchema", paymentModeSchema);

module.exports = model;