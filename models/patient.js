const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: false,
        },
        lastName: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false,
            unique: true,
        },
        email: {
            type: String,
            required: false,
            unique: true,
        },
        birthday: {
            type: String,
            required: false,
        },
        maritalStatus: {
            type: String,
            required: false,
        },
        sex: {
            type: String,
            required: false,
        },
        bloodGroup: {
            type: String,
            required: false,
        },
        weight: {
            type: String,
            required: false,
        },
        height: {
            type: String,//🥸
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
        history: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false
        },
        knownDisease: {
            type: String,
            required: false
        },
        period: {
            type: String,
            required: false
        },
        familyHistory: {
            type: String,
            required: false
        },
        diseases: {
            type: String,
            required: false
        },
    },
    {
        collection: "patients",
    }
);

const model = mongoose.model("patientSchema", patientSchema);

module.exports = model;
