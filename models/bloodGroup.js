const mongoose = require("mongoose");

const bloodGroupSchema = new mongoose.Schema(
    {
        name: {
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
        collection: "bloodGroups",
    }
);

const model = mongoose.model("bloodGroupSchema", bloodGroupSchema);

module.exports = model;