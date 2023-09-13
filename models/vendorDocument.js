const mongoose = require("mongoose");

const vendorDocumentSchema = new mongoose.Schema(
    {
        vendorId: {
            type: String,
            required: false,
        },
        idProof: {
            type: String,
            required: false
        },
        idProofStatus: {
            type: String,
            required: false,
        },
        certificate: {
            type: String,
            required: false,
        },
        certificateStatus: {
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
        collection: "vendorDocuments",
    }
);

const model = mongoose.model("vendorDocumentSchema", vendorDocumentSchema);

module.exports = model;
