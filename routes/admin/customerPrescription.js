const express = require("express");
const router = express.Router();

const CustomerPrescription = require("../../models/customerPrescription");
const { validateInputs } = require("../../functions/validate")

router.post("/new", validateInputs(["doctor", "patient", "bookingId"]), async (req, res) => {
    try {
        let {
            doctor,
            patient,
            bookingId } = req.body;
        const customerPrescription = await CustomerPrescription.create({
            doctor,
            patient,
            bookingId
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

router.post("/edit", validateInputs(["id", "doctor", "patient", "bookingId"]), async (req, res) => {
    try {
        let {
            id,
            doctor,
            patient,
            bookingId } = req.body;
        const customerPrescription = await CustomerPrescription.findByIdAndUpdate(id, { doctor, patient, bookingId });
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
        const customerPrescription = await CustomerPrescription.findByIdAndDelete(id);
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
        const customerPrescriptions = await CustomerPrescription.find();
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
        const customerPrescription = await CustomerPrescription.findById(req.params.id);
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