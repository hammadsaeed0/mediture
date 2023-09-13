const express = require("express");
const router = express.Router();

const Billing = require("../../models/billing");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["patientName", "payment", "invoiceTitle", "amount"]), async (req, res) => {
    try {
        Billing.validate(req.body);
        const billing = await Billing.create({
            ...req.body,
        });
        return res.status(201).json({
            status: "success",
            data: billing
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            payment: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "patientName", "payment", "invoiceTitle", "amount"]), async (req, res) => {
    try {
        let { patientName, payment, id, invoiceTitle, amount } = req.body;
        const billing = await Billing.findByIdAndUpdate(id, {
            patientName, payment, invoiceTitle, amount
        });
        return res.status(200).json({
            status: "success",
            data: billing
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            payment: "provide correct parameters"
        });
    }
});

router.post("/delete", validateInputs(["id"]), async (req, res) => {
    try {
        let { id } = req.body;
        const billing = await Billing.findByIdAndDelete(id);
        return res.status(200).json({
            status: "success",
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            payment: "provide valid parameters"
        });
    }
});

router.get("/getAll", async (req, res) => {
    try {
        const customerPrescriptions = await Billing.find();
        return res.status(200).json({
            status: "success",
            data: customerPrescriptions
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            payment: "no records found"
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const billing = await Billing.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: billing
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            payment: "no records found"
        });
    }
})


module.exports = router;
