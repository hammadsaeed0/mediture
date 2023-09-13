const mongoose = require("mongoose");

const customerWalletHistorySchema = new mongoose.Schema(
    {
        customerId: {
            type: String,
            required: false,
        },
        type: {
            type: String,
            required: false,
        },
        message: {
            type: String,
            required: false,
        },
        amount: {
            type: String,
            required: false,
        },
        amountType: {
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
        collection: "customerWalletHistories",
    }
);

const model = mongoose.model("customerWalletHistorySchema", customerWalletHistorySchema);

module.exports = model;