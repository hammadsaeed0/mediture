const mongoose = require("mongoose");

const doctorTimeSchema = new mongoose.Schema(
    {
        systemName: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: false,
        },
        currency: {
            type: String,
            required: false,
        },
        vat: {
            type: String,
            required: false,
        },
        language: {
            type: String,
            required: false,
        },
        interval: {
            type: String,
            required: false,
        },
        fromSat: {
            type: String,
            required: false,
        },
        fromSun: {
            type: String,
            required: false,
        },
        fromMon: {
            type: String,
            required: false,
        },
        fromTue: {
            type: String,
            required: false,
        },
        fromWed: {
            type: String,
            required: false,
        },
        fromThu: {
            type: String,
            required: false,
        },
        fromFri: {
            type: String,
            required: false,
        },
        toSat: {
            type: String,
            required: false,
        },
        toSun: {
            type: String,
            required: false,
        },
        toMon: {
            type: String,
            required: false,
        },
        toTue: {
            type: String,
            required: false,
        },
        toWed: {
            type: String,
            required: false,
        },
        toThu: {
            type: String,
            required: false,
        },
        toFri: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: false,
        },
    },
    {
        collection: "doctorTimes",
    }
);

const model = mongoose.model("doctorTimeSchema", doctorTimeSchema);

module.exports = model;
