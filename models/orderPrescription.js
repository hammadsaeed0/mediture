const mongoose = require("mongoose");

const orderPrescriptionSchema = new mongoose.Schema(
    {
        vendor: {
            type: String,
            required: false,
        },
        customerName: {
            type: String,
            required: false
        },
        deliveryAddress: {
            type: String,
            required: false,
        },
        total: {
            type: String,
            required: false,
        },
        deliveryCharge: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: false,
            default: "active"
        }
        // image: { type: String, required: false },
    },
    {
        collection: "orderPrescriptions",
    }
);

const model = mongoose.model("orderPrescriptionSchema", orderPrescriptionSchema);

module.exports = model;
