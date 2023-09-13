const express = require("express");
const router = express.Router();

const DoctorRating = require("../../models/doctorRating");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["customerName", "doctorName", "booking", "rating"]), async (req, res) => {
    try {
        let { customerName, doctorName, booking, rating } = req.body;
        const doctorRating = await DoctorRating.create({
            customerName, doctorName, booking, rating
        });
        return res.status(201).json({
            status: "success",
            data: doctorRating
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "customerName", "doctorName", "booking", "rating"]), async (req, res) => {
    try {
        let { customerName, doctorName, booking, rating, id } = req.body;
        const doctorRating = await DoctorRating.findByIdAndUpdate(id, {
            customerName, doctorName, booking, rating
        });
        return res.status(200).json({
            status: "success",
            data: doctorRating
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
        const doctorRating = await DoctorRating.findByIdAndDelete(id);
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
        const customerPrescriptions = await DoctorRating.find();
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
        const doctorRating = await DoctorRating.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: doctorRating
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;