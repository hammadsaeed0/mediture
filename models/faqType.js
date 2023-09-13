const mongoose = require("mongoose");

const faqTypeSchema = new mongoose.Schema(
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
        collection: "faqTypes",
    }
);

const model = mongoose.model("faqTypeSchema", faqTypeSchema);

module.exports = model;