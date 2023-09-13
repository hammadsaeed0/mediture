const mongoose = require("mongoose");

const productPharmacySchema = new mongoose.Schema(
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
        pharmacy: {
            type: String,
            required: false,
        },
        packSize: {
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
        collection: "productPharmacy",
    }
);

const model = mongoose.model("productPharmacySchema", productPharmacySchema);

module.exports = model;
