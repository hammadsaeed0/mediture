const mongoose = require("mongoose");

const promoCodeSchema = new mongoose.Schema(
    {
        promoName: {
            type: String,
            required: false,
        },
        promoCode: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        type: {
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
        // image: { type: String, required: false },
    },
    {
        collection: "promoCodes",
    }
);

const model = mongoose.model("promoCodeSchema", promoCodeSchema);

module.exports = model;