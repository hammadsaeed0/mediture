const express = require("express");
const router = express.Router();

const CancelationReason = require("../../models/cancelationReason");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["reason"]), async (req, res) => {
    try {
        let { reason } = req.body;
        const cancelationReason = await CancelationReason.create({
            reason
        });
        return res.status(201).json({
            status: "success",
            data: cancelationReason
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "reason"]), async (req, res) => {
    try {
        let { reason, id } = req.body;
        const cancelationReason = await CancelationReason.findByIdAndUpdate(id, {
            reason
        });
        return res.status(200).json({
            status: "success",
            data: cancelationReason
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
        const cancelationReason = await CancelationReason.findByIdAndDelete(id);
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
        const customerPrescriptions = await CancelationReason.find();
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
        const cancelationReason = await CancelationReason.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: cancelationReason
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;