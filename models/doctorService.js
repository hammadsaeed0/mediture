const mongoose = require("mongoose");

const doctorServiceSchema = new mongoose.Schema(
    {
        doctor: {
            type: String,
            required: false,
        },
        service: {
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
        collection: "doctorService",
    }
);

const model = mongoose.model("doctorServiceSchema", doctorServiceSchema);

module.exports = model;
