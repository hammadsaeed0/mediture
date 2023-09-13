const mongoose = require("mongoose");

const formLaboratorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
        },
        license: {
            type: String,
            required: false,
        },
        owner: {
            type: String,
            required: false,
        },
        pathologist: {
            type: String,
            required: false,
        },
        authorizedPerson: {
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
        testDetails: {
            type: String,
            required: false,
        },
        pmdc: {
            type: String,
            required: false,
        },
        expiry: {
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
        collection: "formLaboratorys",
    }
);

const model = mongoose.model("formLaboratorySchema", formLaboratorySchema);

module.exports = model;
