const mongoose = require("mongoose");

const doctorSubCategorySchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: false,
        },
        subCategoryName: {
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
        collection: "doctorSubCategory",
    }
);

const model = mongoose.model("doctorSubCategorySchema", doctorSubCategorySchema);

module.exports = model;
