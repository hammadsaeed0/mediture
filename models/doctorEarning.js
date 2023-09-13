const mongoose = require("mongoose");

const doctorEarningSchema = new mongoose.Schema(
    {
        bookingId: {
            type: String,
            required: false,
        },
        doctor: {
            type: String,
            required: false,
        },
        amount: {
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
        collection: "doctorEarning",
    }
);

const model = mongoose.model("doctorEarningSchema", doctorEarningSchema);

module.exports = model;