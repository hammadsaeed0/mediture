const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
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
        collection: "users",
    }
);

const model = mongoose.model("userSchema", userSchema);

module.exports = model;
