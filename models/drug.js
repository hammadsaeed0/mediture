const mongoose = require("mongoose");

const drugSchema = new mongoose.Schema(
    {
        tradeName: {
            type: String,
            required: false,
        },
        genericName: {
            type: String,
            required: false
        },
        comments: {
            type: String,
            required: false
        },
        status: {
            type: String,
            required: false,
            default: "pending"
        },
    },
    {
        collection: "drugs",
    }
);

const model = mongoose.model("drugSchema", drugSchema);

module.exports = model;
