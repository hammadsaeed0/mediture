const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema(
    {
        drugList: {
            type: Array,
            required: false,
        },
        testList: {
            type: Array,
            required: false
        },
        patient: {
            type: String,
            required: false
        },
        status: {
            type: String,
            required: false,
            default: "pending"
        },
    }, {
    collection: "prescriptions",
}
);

const model = mongoose.model("prescriptionSchema", prescriptionSchema);

module.exports = model;
