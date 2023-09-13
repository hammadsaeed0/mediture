const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
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
        password: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false,
            unique: true
        },
        status: {
            type: String,
            required: false,
            default: "active"
        }
        // image: { type: String, required: false },
    },
    {
        collection: "customers",
    }
);

const model = mongoose.model("customerSchema", customerSchema);

module.exports = model;
