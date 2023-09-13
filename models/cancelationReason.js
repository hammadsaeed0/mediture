const mongoose = require("mongoose");

const cancelationReasonSchema = new mongoose.Schema(
    {
        reason: {
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
        collection: "cancelationReasons",
    }
);

const model = mongoose.model("cancelationReasonSchema", cancelationReasonSchema);

module.exports = model;