const mongoose = require("mongoose");

const formAmbulanceSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: false,
        },
        companyDetail: {
            type: String,
            required: false,
        },
        authPersonDetail: {
            type: String,
            required: false,
        },
        nic: {
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
        equipmentDetail: {
            type: String,
            required: false,
        },
        registrationNum: {
            type: String,
            required: false,
        },
        emergencyContact: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: false,
        },
        phone: {
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
        collection: "formAmbulances",
    }
);

const model = mongoose.model("formAmbulanceSchema", formAmbulanceSchema);

module.exports = model;
