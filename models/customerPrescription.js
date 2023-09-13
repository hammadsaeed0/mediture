const mongoose = require("mongoose");

const customerPrescriptionSchema = new mongoose.Schema(
    {
        doctor: {
            type: String,
            required: false,
        },
        patient: {
            type: String,
            required: false
        },
        bookingId: {
            type: String,
            required: false,
        },
        date: {
            type: Date,
            required: false,
            default: Date.now()
        },
        status: {
            type: String,
            required: false,
            default: "active"
        }
    },
    {
        collection: "customerPrescriptions",
    }
);

const model = mongoose.model("customerPrescriptionSchema", customerPrescriptionSchema);

module.exports = model;