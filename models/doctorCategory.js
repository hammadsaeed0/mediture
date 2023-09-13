const mongoose = require("mongoose");

const doctorCategorySchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: false,
        },
        categoryImage: {
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
        collection: "doctorCategory",
    }
);

const model = mongoose.model("doctorCategorySchema", doctorCategorySchema);

module.exports = model;
