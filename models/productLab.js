const mongoose = require("mongoose");

const productLabSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: false,
        },
        price: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        lab: {
            type: String,
            required: false,
        },
        discount: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: false,
            default: "pending"
        },
    },
    {
        collection: "productLab",
    }
);

const model = mongoose.model("productLabSchema", productLabSchema);

module.exports = model;
