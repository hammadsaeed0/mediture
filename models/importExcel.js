const mongoose = require("mongoose");

const importExcelSchema = new mongoose.Schema(
    {
        vendor: {
            type: String,
            required: false,
        },
        file: {
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
        collection: "importExcels",
    }
);

const model = mongoose.model("importExcelSchema", importExcelSchema);

module.exports = model;