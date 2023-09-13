const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: false,
            unique: true
        },
        name: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false,
            unique: true
        },
        specialist: {
            type: String,
            required: false
        },
        specialistSubCat: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        experience: {
            type: String,
            required: false
        },
        qualification: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false
        },
        gender: {
            type: String,
            required: false
        },
        username: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: false
        },
        documentStatus: {
            type: String,
            required: false
        },
        documentApprovedStatus: {
            type: String,
            required: false
        },
        profileStatus: {
            type: String,
            required: false
        },
        status: {
            type: String,
            required: false,
            default: "pending"
        },
        // image: { type: String, required: false },
    },
    {
        collection: "doctors",
    }
);

const model = mongoose.model("doctorSchema", doctorSchema);

module.exports = model;
