const mongoose = require("mongoose");

const formHospitalSchema = new mongoose.Schema(
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
        authorizedPerson: {
            type: String,
            required: false,
        },
        authorizedPersonNic: {
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
        specialty: {
            type: String,
            required: false,
        },
        consultant: {
            type: String,
            required: false,
        },
        timing: {
            type: String,
            required: false,
        },
        pmdcConsultant: {
            type: String,
            required: false,
        },
        PmdcExpiryConsultant: {
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
        paramedic: {
            type: String,
            required: false,
        },
        physiotherapist: {
            type: String,
            required: false,
        },
        psychologist: {
            type: String,
            required: false,
        },
        pharmacy: {
            type: String,
            required: false,
        },
        drugLicense: {
            type: String,
            required: false,
        },
        drugLicenseExpiry: {
            type: String,
            required: false,
        },
        laboratory: {
            type: String,
            required: false,
        },
        consultantPathologist: {
            type: String,
            required: false,
        },
        pmdcPathologist: {
            type: String,
            required: false,
        },
        expiryPmdcPathologist: {
            type: String,
            required: false,
        },
        laboratoryTestDetail: {
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
        emergencyNumber: {
            type: String,
            required: false,
        },
        bankDetails: {
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
        collection: "formHospitals",
    }
);

const model = mongoose.model("formHospitalSchema", formHospitalSchema);

module.exports = model;
