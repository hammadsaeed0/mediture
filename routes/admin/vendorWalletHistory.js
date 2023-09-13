const express = require("express");
const router = express.Router();

const VendorWalletHistory = require("../../models/vendorWalletHistory");
const { validateInputs } = require("../../functions/validate");

router.post("/new", validateInputs(["vendorName", "message", "amount"]), async (req, res) => {
    try {
        let {
            vendorName,
            message,
            amount,
        } = req.body;
        const customerPrescription = await VendorWalletHistory.create({
            vendorName,
            message,
            amount,
        });
        return res.status(201).json({
            status: "success",
            data: customerPrescription
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "vendorName", "message", "amount"]), async (req, res) => {
    try {
        let {
            id,
            vendorName,
            message,
            amount,
        } = req.body;
        const customerPrescription = await VendorWalletHistory.findByIdAndUpdate(id, {
            vendorName,
            message,
            amount,
        });
        return res.status(200).json({
            status: "success",
            data: customerPrescription
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        });
    }
});

router.post("/delete", validateInputs(["id"]), async (req, res) => {
    try {
        let { id } = req.body;
        const customerPrescription = await VendorWalletHistory.findByIdAndDelete(id);
        return res.status(200).json({
            status: "success",
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "provide valid parameters"
        });
    }
});

router.get("/getAll", async (req, res) => {
    try {
        const customerPrescriptions = await VendorWalletHistory.find();
        return res.status(200).json({
            status: "success",
            data: customerPrescriptions
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const customerPrescription = await VendorWalletHistory.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: customerPrescription
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;