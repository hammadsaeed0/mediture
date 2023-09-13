const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        bookingRequestId: {
            type: String,
            required: false,
        },
        doctor: {
            type: String,
            required: false
        },
        patient: {
            type: String,
            required: false,
        },
        prescription: {
            type: String,
            required: false,
        },
        startingTime: {
            type: String,
            required: false,
        },
        endingTime: {
            type: String,
            required: false,
        },
        amount: {
            type: String,
            required: false,
        },
        invoice: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: false,
            default: "active"
        }
    },
    {
        collection: "bookings",
    }
);

const model = mongoose.model("bookingSchema", bookingSchema);

module.exports = model;
