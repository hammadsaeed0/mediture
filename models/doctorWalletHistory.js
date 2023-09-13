const mongoose = require("mongoose");

const doctorWalletHistorySchema = new mongoose.Schema(
    {
        message: {
            type: String,
            required: false,
        },
        doctor: {
            type: String,
            required: false,
        },
        amount: {
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
        collection: "doctorWalletHistory",
    }
);

const model = mongoose.model("doctorWalletHistorySchema", doctorWalletHistorySchema);

module.exports = model;