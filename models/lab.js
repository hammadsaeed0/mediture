const mongoose = require("mongoose");

const labStaffSchema = new mongoose.Schema(
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
        // image: { type: String, required: false },
    },
    {
        collection: "labStaffs",
    }
);

const model = mongoose.model("labStaffSchema", labStaffSchema);

module.exports = model;
