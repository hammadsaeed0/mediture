const mongoose = require("mongoose");

const TaxSchema = new mongoose.Schema(
    {
        tax: {
            type: String,
            required: false,
        },
        percentage: {
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
        collection: "taxes",
    }
);

const model = mongoose.model("TaxSchema", TaxSchema);

module.exports = model;