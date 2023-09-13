const mongoose = require("mongoose");

const vendorCommissionSchema = new mongoose.Schema(
    {
        vendorId: {
            type: String,
            required: false
        },
        vendorCommission: {
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
        collection: "vendorCommissions",
    }
);

const model = mongoose.model("vendorCommissionSchema", vendorCommissionSchema);

module.exports = model;
