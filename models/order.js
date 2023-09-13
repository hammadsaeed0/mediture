const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        vendor: {
            type: String,
            required: false,
        },
        orderId: {
            type: String,
            required: false
        },
        prescriptionId: {
            type: String,
            required: false,
        },
        customerId: {
            type: String,
            required: false,
        },
        deliveredBy: {
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
        collection: "orders",
    }
);

const model = mongoose.model("orderSchema", orderSchema);

module.exports = model;
