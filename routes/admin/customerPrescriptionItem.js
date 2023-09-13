const express = require("express");
const router = express.Router();

const CustomerPrescriptionItem = require("../../models/customerPrescriptionItem");
const { validateInputs } = require("../../functions/validate")

router.post("/new", validateInputs(["prescriptionId", "medicineName", "morning", "afternoon", "night"]), async (req, res) => {
    try {
        let {
            prescriptionId,
            medicineName,
            morning,
            afternoon,
            night
        } = req.body;
        const customerPrescription = await CustomerPrescriptionItem.create({
            prescriptionId,
            medicineName,
            morning,
            afternoon,
            night
        });
        return res.status(201).json({
            status: "success",
            data: customerPrescription
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "prescriptionId", "medicineName", "morning", "afternoon", "night"]), async (req, res) => {
    try {
        let {
            id,
            prescriptionId,
            medicineName,
            morning,
            afternoon,
            night
        } = req.body;
        const customerPrescription = await CustomerPrescriptionItem.findByIdAndUpdate(id, {
            prescriptionId,
            medicineName,
            morning,
            afternoon,
            night
        });
        return res.status(200).json({
            status: "success",
            data: customerPrescription
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
        const customerPrescription = await CustomerPrescriptionItem.findByIdAndDelete(id);
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
        const customerPrescriptions = await CustomerPrescriptionItem.find();
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
        const customerPrescription = await CustomerPrescriptionItem.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: customerPrescription
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;