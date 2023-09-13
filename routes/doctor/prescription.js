const express = require("express");
const router = express.Router();

const Prescription = require("../../models/prescription");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["drugList", "testList", "patient"]), async (req, res) => {
    try {
        let { drugList, testList, patient } = req.body;
        const reportDB = await Prescription.create({
            drugList, testList, patient
        });
        return res.status(201).json({
            status: "success",
            data: reportDB
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            testList: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "drugList", "testList", "patient"]), async (req, res) => {
    try {
        let { drugList, testList, id, patient } = req.body;
        const reportDB = await Prescription.findByIdAndUpdate(id, {
            drugList, testList, patient
        });
        return res.status(200).json({
            status: "success",
            data: reportDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            testList: "provide correct parameters"
        });
    }
});

router.post("/delete", validateInputs(["id"]), async (req, res) => {
    try {
        let { id } = req.body;
        const reportDB = await Prescription.findByIdAndDelete(id);
        return res.status(200).json({
            status: "success",
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            testList: "provide valid parameters"
        });
    }
});

router.get("/getAll", async (req, res) => {
    try {
        const customerPrescriptions = await Prescription.find();
        return res.status(200).json({
            status: "success",
            data: customerPrescriptions
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            testList: "no records found"
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const reportDB = await Prescription.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: reportDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            testList: "no records found"
        });
    }
})


module.exports = router;
