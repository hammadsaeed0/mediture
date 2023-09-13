const express = require("express");
const router = express.Router();

const DoctorTime = require("../../models/doctorTime");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", async (req, res) => {
    try {
        DoctorTime.validate(req.body);
        const doctorTime = await DoctorTime.create({
            ...req.body,
        });
        return res.status(201).json({
            status: "success",
            data: doctorTime
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            payment: "provide correct parameters"
        })
    }
});

router.post("/edit", async (req, res) => {
    try {
        DoctorTime.validate(req.body);
        const doctorTime = await DoctorTime.findByIdAndUpdate(id, {
           ...req.body,
        });
        return res.status(200).json({
            status: "success",
            data: doctorTime
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
        const doctorTime = await DoctorTime.findByIdAndDelete(id);
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
        const customerPrescriptions = await DoctorTime.find();
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
        const doctorTime = await DoctorTime.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: doctorTime
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            payment: "no records found"
        });
    }
})


module.exports = router;
