const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
    {
        location: {
            type: String,
            required: false,
        },
        zipCode: {
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
        collection: "locations",
    }
);

const model = mongoose.model("locationSchema", locationSchema);

module.exports = model;