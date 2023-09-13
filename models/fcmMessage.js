const mongoose = require("mongoose");

const fcmMessageSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: false,
        },
        customerTitle: {
            type: String,
            required: false,
        },
        customerDescription: {
            type: String,
            required: false,
        },
        vendorTitle: {
            type: String,
            required: false,
        },
        vendorDescription: {
            type: String,
            required: false,
        },
        partnerTitle: {
            type: String,
            required: false,
        },
        partnerDescription: {
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
        collection: "fcmMessages",
    }
);

const model = mongoose.model("fcmMessageSchema", fcmMessageSchema);

module.exports = model;