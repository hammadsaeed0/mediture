const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: false,
        },
        message: {
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
        collection: "reports",
    }
);

const model = mongoose.model("reportSchema", reportSchema);

module.exports = model;