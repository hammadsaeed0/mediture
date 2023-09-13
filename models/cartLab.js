const mongoose = require('mongoose');
const cartLabSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        tests: [
            {
                testId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ]
    },
    { timestamps: true }
);


module.exports = mongoose.model("cartLab", cartLabSchema);
