const express = require("express");
const router = express.Router();

const Doctor = require("../../models/doctor");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.get("/getAll", async (req, res) => {
    try {
        const doctors = await Doctor.find().select("-password");
        return res.status(200).json({
            status: "success",
            data: doctors
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
        const doctor = await Doctor.findById(req.params.id).select("-password");
        return res.status(200).json({
            status: "success",
            data: doctor
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            categoryImage: "no records found"
        });
    }
})


module.exports = router;
