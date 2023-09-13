const mongoose = require('mongoose');
const wishListLabSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        tests: {
            type: Array,
            required: false
        },
    },
    { timestamps: true }
);


module.exports = mongoose.model("wishListLab", wishListLabSchema);
