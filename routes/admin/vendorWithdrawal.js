const express = require("express");
const router = express.Router();

const VendorWithdrawal = require("../../models/vendorWithdrawal");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["vendorId", "amount", "referenceProof", "referenceNumber"]), async (req, res) => {
    try {
        let { vendorId, amount, referenceProof, referenceNumber } = req.body;
        const vendorWithdrawal = await VendorWithdrawal.create({
            vendorId, amount, referenceProof, referenceNumber
        });
        return res.status(201).json({
            status: "success",
            data: vendorWithdrawal
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "vendorId", "amount", "referenceProof", "referenceNumber"]), async (req, res) => {
    try {
        let { vendorId, amount, referenceProof, referenceNumber, id } = req.body;
        const vendorWithdrawal = await VendorWithdrawal.findByIdAndUpdate(id, {
            vendorId, amount, referenceProof, referenceNumber
        });
        return res.status(200).json({
            status: "success",
            data: vendorWithdrawal
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
        const vendorWithdrawal = await VendorWithdrawal.findByIdAndDelete(id);
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
        const customerPrescriptions = await VendorWithdrawal.find();
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
        const vendorWithdrawal = await VendorWithdrawal.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: vendorWithdrawal
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;