const mongoose = require("mongoose");

const vendorWalletHistorySchema = new mongoose.Schema(
    {
        vendorName: {
            type: String,
            required: false,
        },
        message: {
            type: String,
            required: false
        },
        amount: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: false,
            default: "active"
        }
    },
    {
        collection: "vendorWalletHistory",
    }
);

const model = mongoose.model("vendorWalletHistorySchema", vendorWalletHistorySchema);

module.exports = model;