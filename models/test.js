// discountPrice, actualPrice, packSize
// make an api for add to cart for labTests
// send cart data to labPanel
// make an api for checkout and send data to labPanel
// same for productPharmacy
// make apis for adding a product or a test to favorites
// make api for packages
const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        productType: {
            type: String,
            required: false,
        },
        packSize: {
            type: String,
            required: false,
        },
        discountPrice: {
            type: String,
            required: false
        },
        actualPrice: {
            type: String,
            required: false
        },
        status: {
            type: String,
            required: false,
            default: "pending"
        },
    },
    {
        collection: "tests",
    }
);

const model = mongoose.model("testSchema", testSchema);

module.exports = model;
