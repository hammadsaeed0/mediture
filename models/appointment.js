const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
    {
        patient: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false,
        },
        time: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: false,
        },
    },
    {
        collection: "appointments",
    }
);

const model = mongoose.model("appointmentSchema", appointmentSchema);

module.exports = model;
