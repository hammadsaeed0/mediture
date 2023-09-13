const express = require("express");
const router = express.Router();

const DoctorClinic = require("../../models/doctorClinic");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["clinicType", "doctor", "clinicLat", "clinicLon", "appointmentInterval"]), async (req, res) => {
    try {
        let { clinicType, doctor, clinicLat, clinicLon, appointmentInterval } = req.body;
        const doctorClinic = await DoctorClinic.create({
            clinicType, doctor, clinicLat, clinicLon, appointmentInterval
        });
        return res.status(201).json({
            status: "success",
            data: doctorClinic
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "clinicType", "doctor", "clinicLat", "clinicLon", "appointmentInterval"]), async (req, res) => {
    try {
        let { clinicType, clinicLat, clinicLon, appointmentInterval, doctor, id } = req.body;
        const doctorClinic = await DoctorClinic.findByIdAndUpdate(id, {
            clinicType, doctor, clinicLat, clinicLon, appointmentInterval
        });
        return res.status(200).json({
            status: "success",
            data: doctorClinic
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
        const clinicType = await DoctorClinic.findByIdAndDelete(id);
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
        const titles = await DoctorClinic.find();
        return res.status(200).json({
            status: "success",
            data: titles
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
        const clinicType = await DoctorClinic.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: clinicType
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;