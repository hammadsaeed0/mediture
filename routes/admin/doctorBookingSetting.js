const express = require("express");
const router = express.Router();

const DoctorBookingSetting = require("../../models/doctorBookingSetting");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["doctor", "onlineBooking", "directAppointment"]), async (req, res) => {
    try {
        let {
            doctor,
            onlineBooking,
            directAppointment
        } = req.body;
        const doctorBookingSetting = await DoctorBookingSetting.create({
            doctor,
            onlineBooking,
            directAppointment
        });
        return res.status(201).json({
            status: "success",
            data: doctorBookingSetting
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["doctor", "onlineBooking", "directAppointment"]), async (req, res) => {
    try {
        let {
            id,
            doctor,
            onlineBooking,
            directAppointment } = req.body;
        const doctorBookingSetting = await DoctorBookingSetting.findByIdAndUpdate(id, { doctor, onlineBooking, directAppointment });
        return res.status(200).json({
            status: "success",
            data: doctorBookingSetting
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
        const doctorBookingSetting = await DoctorBookingSetting.findByIdAndDelete(id);
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
        const customers = await DoctorBookingSetting.find();
        return res.status(200).json({
            status: "success",
            data: customers
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
        const doctorBookingSetting = await DoctorBookingSetting.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: doctorBookingSetting
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;