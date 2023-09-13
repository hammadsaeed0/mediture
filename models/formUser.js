const mongoose = require("mongoose");

const formUserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
        },
        gender: {
            type: String,
            required: false,
        },
        fatherORHusband: {
            type: String,
            required: false,
        },
        dob: {
            type: String,
            required: false,
        },
        nic: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
        city: {
            type: String,
            required: false,
        },
        country: {
            type: String,
            required: false,
        },
        qualification: {
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
        password: {
            type: String,
            required: false,
        },
        bank: {
            type: String,
            required: false,
        },
        ntn: {
            type: String,
            required: false,
        },
        facebook: {
            type: String,
            required: false,
        },
        instagram: {
            type: String,
            required: false,
        },
        picture: {
            type: String,
            required: false,
        },
        documents: {
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
        collection: "formUsers",
    }
);

const model = mongoose.model("formUserSchema", formUserSchema);

module.exports = model;
