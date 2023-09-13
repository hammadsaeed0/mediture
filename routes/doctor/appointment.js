const express = require("express");
const router = express.Router();

const Appointment = require("../../models/appointment");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["patient", "address", "phone", "time"]), async (req, res) => {
    try {
        let { patient, address, phone, time } = req.body;
        const appointment = await Appointment.create({
            patient, address, phone, time,
        });
        return res.status(201).json({
            status: "success",
            data: appointment
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            address: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "patient", "address"]), async (req, res) => {
    try {
        let { patient, address, id, phone, time } = req.body;
        const appointment = await Appointment.findByIdAndUpdate(id, {
            patient, address, phone, time,
        });
        return res.status(200).json({
            status: "success",
            data: appointment
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            address: "provide correct parameters"
        });
    }
});

router.post("/delete", validateInputs(["id"]), async (req, res) => {
    try {
        let { id } = req.body;
        const appointment = await Appointment.findByIdAndDelete(id);
        return res.status(200).json({
            status: "success",
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            address: "provide valid parameters"
        });
    }
});

router.get("/getAll", async (req, res) => {
    try {
        const customerPrescriptions = await Appointment.find();
        return res.status(200).json({
            status: "success",
            data: customerPrescriptions
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            address: "no records found"
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: appointment
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            address: "no records found"
        });
    }
})


module.exports = router;
