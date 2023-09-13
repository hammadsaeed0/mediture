const express = require("express");
const router = express.Router();

const Appointment = require("../../models/appointment");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.get("/getAll", async (req, res) => {
    try {
        const customerPrescriptions = await Appointment.find();
        return res.status(200).json({
            status: "success",
            data: customerPrescriptions
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            categoryImage: "no records found"
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const reportDB = await Appointment.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: reportDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            categoryImage: "no records found"
        });
    }
})


module.exports = router;
