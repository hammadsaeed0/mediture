const express = require("express");
const router = express.Router();

const DoctorService = require("../../models/doctorService");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["doctor", "service"]), async (req, res) => {
    try {
        let { doctor, service } = req.body;
        const doctorService = await DoctorService.create({
            doctor, service
        });
        return res.status(201).json({
            status: "success",
            data: doctorService
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["doctor", "service"]), async (req, res) => {
    try {
        let { doctor, service, id } = req.body;
        const doctorService = await DoctorService.findByIdAndUpdate(id, {
            doctor, service
        });
        return res.status(200).json({
            status: "success",
            data: doctor
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
        const doctorService = await DoctorService.findByIdAndDelete(id);
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
        const locations = await DoctorService.find();
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
        const doctor = await DoctorService.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: doctor
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;