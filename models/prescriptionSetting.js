const mongoose = require("mongoose");

const prescriptionSettingSchema = new mongoose.Schema(
    {
        headerLeft: {
            type: String,
            required: false,
        },
        headerRight: {
            type: String,
            required: false
        },
        footerLeft: {
            type: String,
            required: false
        },
        footerRight: {
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
        collection: "prescriptionSettings",
    }
);

const model = mongoose.model("prescriptionSettingSchema", prescriptionSettingSchema);

module.exports = model;
