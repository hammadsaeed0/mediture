const mongoose = require("mongoose");

const privacyPolicyTypeSchema = new mongoose.Schema(
    {
        name: {
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
        collection: "privacyPolicyTypes",
    }
);

const model = mongoose.model("privacyPolicyTypeSchema", privacyPolicyTypeSchema);

module.exports = model;