const express = require("express");
const router = express.Router();

const DoctorWithdrawal = require("../../models/doctorWithdrawal");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["referenceProof", "doctorId", "referenceNumber", "amount"]), async (req, res) => {
    try {
        let { referenceProof, doctorId, referenceNumber, amount } = req.body;
        const doctorWithdrawal = await DoctorWithdrawal.create({
            referenceProof, doctorId, referenceNumber, amount
        });
        return res.status(201).json({
            status: "success",
            data: doctorWithdrawal
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "referenceProof", "doctorId", "referenceNumber", "amount"]), async (req, res) => {
    try {
        let { referenceProof, doctorId, referenceNumber, amount, id } = req.body;
        const doctorWithdrawal = await DoctorWithdrawal.findByIdAndUpdate(id, {
            referenceProof, doctorId, referenceNumber, amount
        });
        return res.status(200).json({
            status: "success",
            data: doctorWithdrawal
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
        const doctorWithdrawal = await DoctorWithdrawal.findByIdAndDelete(id);
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
        const customerPrescriptions = await DoctorWithdrawal.find();
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
        const doctorWithdrawal = await DoctorWithdrawal.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: doctorWithdrawal
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;