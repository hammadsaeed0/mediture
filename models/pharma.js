const mongoose = require("mongoose");

const pharmaStaffSchema = new mongoose.Schema(
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
        collection: "pharmaStaffs",
    }
);

const model = mongoose.model("pharmaStaffSchema", pharmaStaffSchema);

module.exports = model;
