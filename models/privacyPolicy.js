const mongoose = require("mongoose");

const privacyPolicySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        type: {
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
        collection: "privacyPolicies",
    }
);

const model = mongoose.model("privacyPolicySchema", privacyPolicySchema);

module.exports = model;