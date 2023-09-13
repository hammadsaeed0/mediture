const mongoose = require("mongoose");

const doctorClinicSchema = new mongoose.Schema(
    {
        clinicType: {
            type: String,
            required: false,
        },
        doctor: {
            type: String,
            required: false,
        },
        clinicLat: {
            type: String,
            required: false,
        },
        clinicLon: {
            type: String,
            required: false
        },
        appointmentInterval: {
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
        collection: "doctorClinic",
    }
);

const model = mongoose.model("doctorClinicSchema", doctorClinicSchema);

module.exports = model;