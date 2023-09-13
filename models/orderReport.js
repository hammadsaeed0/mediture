const mongoose = require("mongoose");

const orderReportSchema = new mongoose.Schema(
    {
        vendor: {
            type: String,
            required: false,
        },
        orderId: {
            type: String,
            required: false
        },
        customer: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
        subTotal: {
            type: String,
            required: false,
        },
        discount: {
            type: String,
            required: false,
        },
        total: {
            type: String,
            required: false,
        },
        deliveredBy: {
            type: String,
            required: false,
        },
        paymentMode: {
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
        collection: "orderReports",
    }
);

const model = mongoose.model("orderReportSchema", orderReportSchema);

module.exports = model;
