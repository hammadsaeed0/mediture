const mongoose = require("mongoose");

const doctorBookingSettingSchema = new mongoose.Schema(
    {
        doctor: {
            type: String,
            required: false,
        },
        onlineBooking: {
            type: String,
            required: false,
        },
        directAppointment: {
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
        collection: "doctorBookingSetting",
    }
);

const model = mongoose.model("doctorBookingSettingSchema", doctorBookingSettingSchema);

module.exports = model;