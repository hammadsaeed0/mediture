const express = require("express");
const router = express.Router();

const DoctorDocument = require("../../models/doctorDocument");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", upload.fields([{ name: "idProof" }, { name: "certificate" }]), validateInputs(["doctor", "idStatus", "certificateStatus"]), async (req, res) => {
    try {
        let { doctor, certificateStatus, certificate } = req.body;
        let data = { doctor, certificateStatus, certificate };
        Object.keys(req.files).forEach((key) => {
            let path = req.files[key][0].path.slice(6);
            data[key] = path;
        });
        const doctorDocument = await DoctorDocument.create({
            ...data,
        });
        return res.status(201).json({
            status: "success",
            data: doctorDocument
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", upload.fields([{ name: "idProof" }, { name: "certificate" }]), validateInputs(["id", "doctor", "idStatus", "certificateStatus"]), async (req, res) => {
    try {
        let { doctor, certificateStatus, certificate, id } = req.body;
        let data = { doctor, certificateStatus, certificate };
        Object.keys(req.files).forEach((key) => {
            let path = req.files[key][0].path.slice(6);
            data[key] = path;
        });
        const doctorDocument = await DoctorDocument.findByIdAndUpdate(id, {
            ...data
        });
        return res.status(200).json({
            status: "success",
            data: doctorDocument
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
        const doctorDocument = await DoctorDocument.findByIdAndDelete(id);
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
        const customerPrescriptions = await DoctorDocument.find();
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
        const doctorDocument = await DoctorDocument.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: doctorDocument
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;