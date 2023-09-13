const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema(
    {
        patientName: {
            type: String,
            required: false,
        },
        payment: {
            type: String,
            required: false
        },
        invoiceTitle: {
            type: String,
            required: false,
        },
        amount: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: false,
        },
    },
    {
        collection: "billings",
    }
);

const model = mongoose.model("billingSchema", billingSchema);

module.exports = model;
