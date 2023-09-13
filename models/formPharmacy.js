const mongoose = require("mongoose");

const formPharmacySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
        },
        license: {
            type: String,
            required: false,
        },
        licenseIssue: {
            type: String,
            required: false,
        },
        licenseExpiry: {
            type: String,
            required: false,
        },
        owner: {
            type: String,
            required: false,
        },
        pharmacist: {
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
        medicineDetails: {
            type: String,
            required: false,
        },
        brandName: {
            type: String,
            required: false,
        },
        genericName: {
            type: String,
            required: false,
        },
        therapeuticGroup: {
            type: String,
            required: false,
        },
        content: {
            type: String,
            required: false,
        },
        indication: {
            type: String,
            required: false,
        },
        dosage: {
            type: String,
            required: false,
        },
        interaction: {
            type: String,
            required: false,
        },
        precaution: {
            type: String,
            required: false,
        },
        sideEffect: {
            type: String,
            required: false,
        },
        price: {
            type: String,
            required: false,
        },
        productImage: {
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
        collection: "formPharmacy",
    }
);

const model = mongoose.model("formPharmacySchema", formPharmacySchema);

module.exports = model;
