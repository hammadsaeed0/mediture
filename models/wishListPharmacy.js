const mongoose = require('mongoose');
const wishListPharmacySchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        products: {
            type: Array,
            required: false
        },
    },
    { timestamps: true }
);


module.exports = mongoose.model("wishListPharmacy", wishListPharmacySchema);
