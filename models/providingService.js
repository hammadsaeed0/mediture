const mongoose = require("mongoose");

const providingServiceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
        },
        image: {
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
        collection: "providingServices",
    }
);

const model = mongoose.model("providingServiceSchema", providingServiceSchema);

module.exports = model;