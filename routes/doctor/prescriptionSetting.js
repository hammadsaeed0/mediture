const express = require("express");
const router = express.Router();

const PrescriptionSetting = require("../../models/prescriptionSetting");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["headerLeft", "headerRight", "footerLeft", "footerRight"]), async (req, res) => {
    try {
        let { headerLeft, headerRight,footerLeft,footerRight } = req.body;
        const reportDB = await PrescriptionSetting.create({
            headerLeft, headerRight,footerLeft,footerRight
        });
        return res.status(201).json({
            status: "success",
            data: reportDB
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            headerRight: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "headerLeft", "headerRight"]), async (req, res) => {
    try {
        let { headerLeft, headerRight,footerLeft,footerRight, id } = req.body;
        const reportDB = await PrescriptionSetting.findByIdAndUpdate(id, {
            headerLeft, headerRight,footerLeft,footerRight,
        });
        return res.status(200).json({
            status: "success",
            data: reportDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            headerRight: "provide correct parameters"
        });
    }
});

router.post("/delete", validateInputs(["id"]), async (req, res) => {
    try {
        let { id } = req.body;
        const reportDB = await PrescriptionSetting.findByIdAndDelete(id);
        return res.status(200).json({
            status: "success",
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            headerRight: "provide valid parameters"
        });
    }
});

router.get("/getAll", async (req, res) => {
    try {
        const customerPrescriptions = await PrescriptionSetting.find();
        return res.status(200).json({
            status: "success",
            data: customerPrescriptions
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            headerRight: "no records found"
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const reportDB = await PrescriptionSetting.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: reportDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            headerRight: "no records found"
        });
    }
})


module.exports = router;
