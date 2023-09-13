const mongoose = require("mongoose");

const doctorDocumentSchema = new mongoose.Schema(
    {
        doctor: {
            type: String,
            required: false,
        },
        idProof: {
            type: String,
            required: false,
        },
        idStatus: {
            type: String,
            required: false
        },
        certificate: {
            type: String,
            required: false
        },
        certificateStatus : {
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
        collection: "doctorDocument",
    }
);

const model = mongoose.model("doctorDocumentSchema", doctorDocumentSchema);

module.exports = model;
