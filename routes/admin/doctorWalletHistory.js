const express = require("express");
const router = express.Router();

const DoctorWalletHistory = require("../../models/doctorWalletHistory");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["message", "doctor", "amount"]), async (req, res) => {
    try {
        let { message, doctor, amount } = req.body;
        const doctorWalletHistory = await DoctorWalletHistory.create({
            message, doctor, amount
        });
        return res.status(201).json({
            status: "success",
            data: doctorWalletHistory
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "message", "doctor", "amount"]), async (req, res) => {
    try {
        let { message, doctor, amount, id } = req.body;
        const doctorWalletHistory = await DoctorWalletHistory.findByIdAndUpdate(id, {
            message, doctor, amount
        });
        return res.status(200).json({
            status: "success",
            data: doctorWalletHistory
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
        const doctorWalletHistory = await DoctorWalletHistory.findByIdAndDelete(id);
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
        const customerPrescriptions = await DoctorWalletHistory.find();
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
        const doctorWalletHistory = await DoctorWalletHistory.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: doctorWalletHistory
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;