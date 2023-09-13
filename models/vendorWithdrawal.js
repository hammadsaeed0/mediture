const mongoose = require("mongoose");

const vendorWithdrawalSchema = new mongoose.Schema(
    {
        vendorId: {
            type: String,
            required: false,
        },
        amount: {
            type: String,
            required: false
        },
        referenceProof: {
            type: String,
            required: false,
        },
        referenceNumber: {
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
        collection: "vendorWithdrawals",
    }
);

const model = mongoose.model("vendorWithdrawalSchema", vendorWithdrawalSchema);

module.exports = model;
