const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
    {
        ownerName: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: false,
        },
        storeName: {
            type: String,
            required: false
        },
        userName: {
            type: String,
            required: false,
        },
        phone: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: false,
        },
        wallet: {
            type: String,
            required: false,
        },
        profilePicture: {
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
        collection: "vendors",
    }
);

const model = mongoose.model("vendorSchema", vendorSchema);

module.exports = model;