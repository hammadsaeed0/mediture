const express = require("express");
const router = express.Router();

const PaymentMode = require("../../models/paymentMode");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["paymentName"]), async (req, res) => {
    try {
        let { paymentName } = req.body;
        const paymentMode = await PaymentMode.create({
            paymentName
        });
        return res.status(201).json({
            status: "success",
            data: paymentMode
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["paymentName"]), async (req, res) => {
    try {
        let { paymentName, id } = req.body;
        const locationDB = await PaymentMode.findByIdAndUpdate(id, {
            paymentName
        });
        return res.status(200).json({
            status: "success",
            data: paymentName
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
        const paymentName = await PaymentMode.findByIdAndDelete(id);
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
        const locations = await PaymentMode.find();
        return res.status(200).json({
            status: "success",
            data: locations
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
        const paymentName = await PaymentMode.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: paymentName
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;