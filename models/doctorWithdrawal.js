const mongoose = require("mongoose");

const doctorWithdrawalSchema = new mongoose.Schema(
    {
        referenceProof: {
            type: String,
            required: false,
        },
        doctorId: {
            type: String,
            required: false,
        },
        referenceNumber: {
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
        collection: "doctorWithdrawal",
    }
);

const model = mongoose.model("doctorWithdrawalSchema", doctorWithdrawalSchema);

module.exports = model;