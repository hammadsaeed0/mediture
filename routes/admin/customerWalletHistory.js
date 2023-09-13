const express = require("express");
const router = express.Router();

const CustomerWalletHistory = require("../../models/customerWalletHistory");
const { validateInputs } = require("../../functions/validate")

router.post("/new", validateInputs(["customerId", "type", "message", "amount", "amountType"]), async (req, res) => {
    try {
        let {
            customerId,
            type,
            message,
            amount,
            amountType
        } = req.body;
        const customerWalletHistory = await CustomerWalletHistory.create({
            customerId,
            type,
            message,
            amount,
            amountType
        });
        return res.status(201).json({
            status: "success",
            data: customerWalletHistory
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "customerId", "type", "message", "amount", "amountType"]), async (req, res) => {
    try {
        let {
            id,
            customerId,
            type,
            message,
            amount,
            amountType
        } = req.body;
        const customerWalletHistory = await CustomerWalletHistory.findByIdAndUpdate(id, {
            customerId,
            type,
            message,
            amount,
            amountType
        });
        return res.status(200).json({
            status: "success",
            data: customerWalletHistory
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
        const customerWalletHistory = await CustomerWalletHistory.findByIdAndDelete(id);
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
        const customerPrescriptions = await CustomerWalletHistory.find();
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
        const customerWalletHistory = await CustomerWalletHistory.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: customerWalletHistory
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;