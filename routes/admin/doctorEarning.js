const express = require("express");
const router = express.Router();

const DoctorEarning = require("../../models/doctorEarning");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["bookingId", "doctor", "amount"]), async (req, res) => {
    try {
        let { bookingId, doctor, amount } = req.body;
        const doctorEarning = await DoctorEarning.create({
            bookingId, doctor, amount
        });
        return res.status(201).json({
            status: "success",
            data: doctorEarning
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "bookingId", "doctor", "amount"]), async (req, res) => {
    try {
        let { bookingId, doctor, amount, id } = req.body;
        const doctorEarning = await DoctorEarning.findByIdAndUpdate(id, {
            bookingId, doctor, amount
        });
        return res.status(200).json({
            status: "success",
            data: doctorEarning
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
        const doctorEarning = await DoctorEarning.findByIdAndDelete(id);
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
        const customerPrescriptions = await DoctorEarning.find();
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
        const doctorEarning = await DoctorEarning.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: doctorEarning
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;
