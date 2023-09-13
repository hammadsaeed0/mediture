const mongoose = require("mongoose");

const earningSchema = new mongoose.Schema(
    {
        customer: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: false,
        },
        phone: {
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
        collection: "earnings",
    }
);

const model = mongoose.model("earningSchema", earningSchema);

module.exports = model;