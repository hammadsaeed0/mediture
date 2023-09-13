const mongoose = require("mongoose");

const drugListSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: false,
        },
        drugs: {
            type: String,
            required: false
        },
        weight: {
            type: String,
            required: false
        },
        dose: {
            type: String,
            required: false
        },
        duration: {
            type: String,
            required: false
        },
        advice: {
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
        collection: "drugLists",
    }
);

const model = mongoose.model("drugListSchema", drugListSchema);

module.exports = model;
