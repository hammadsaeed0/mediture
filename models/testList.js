const mongoose = require("mongoose");

const testListSchema = new mongoose.Schema(
    {
        test: {
            type: String,
            required: false,
        },
        description: {
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
        collection: "testLists",
    }
);

const model = mongoose.model("testListSchema", testListSchema);

module.exports = model;
