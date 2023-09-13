const mongoose = require("mongoose");

const customerPrescriptionItemSchema = new mongoose.Schema(
    {
        prescriptionId: {
            type: String,
            required: false,
        },
        medicineName: {
            type: String,
            required: false
        },
        morning: {
            type: String,
            required: false,
        },
        afternoon: {
            type: String,
            required: false,
        },
        night: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: false,
            default: "active"
        }
    },
    {
        collection: "customerPrescriptionItems",
    }
);

const model = mongoose.model("customerPrescriptionItemSchema", customerPrescriptionItemSchema);

module.exports = model;