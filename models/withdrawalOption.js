const mongoose = require("mongoose");

const withdrawalOptionSchema = new mongoose.Schema(
    {
        option: {
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
        collection: "withdrawalOptions",
    }
);

const model = mongoose.model("withdrawalOptionSchema", withdrawalOptionSchema);

module.exports = model;