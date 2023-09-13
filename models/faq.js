const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: false,
        },
        answer: {
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
        collection: "faqs",
    }
);

const model = mongoose.model("faqSchema", faqSchema);

module.exports = model;