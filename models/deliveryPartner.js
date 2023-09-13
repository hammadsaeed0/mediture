const mongoose = require("mongoose");

const deliveryPartnerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
        },
        phone: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },
        password: {
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
        collection: "deliveryPartner",
    }
);

const model = mongoose.model("deliveryPartnerSchema", deliveryPartnerSchema);

module.exports = model;