const express = require("express");
const router = express.Router();

const Booking = require("../../models/booking");
const { validateInputs } = require("../../functions/validate")

router.post("/new", validateInputs(["bookingRequestId", "doctor", "patient", "prescription", "startingTime", "endingTime", "amount", "invoice"]), async (req, res) => {
    try {
        let {
            bookingRequestId,
            doctor,
            patient,
            prescription,
            startingTime,
            endingTime,
            amount,
            invoice
        } = req.body;
        const customerPrescription = await Booking.create({
            bookingRequestId,
            doctor,
            patient,
            prescription,
            startingTime,
            endingTime,
            amount,
            invoice
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

router.post("/edit", validateInputs(["id", "bookingRequestId", "doctor", "patient", "prescription", "startingTime"]), async (req, res) => {
    try {
        let {
            id,
            bookingRequestId,
            doctor,
            patient,
            prescription,
            startingTime,
            endingTime,
            amount,
            invoice
        } = req.body;
        const customerPrescription = await Booking.findByIdAndUpdate(id, {
            bookingRequestId,
            doctor,
            patient,
            prescription,
            startingTime,
            endingTime,
            amount,
            invoice
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
        const customerPrescription = await Booking.findByIdAndDelete(id);
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
        const customerPrescriptions = await Booking.find();
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
        const customerPrescription = await Booking.findById(req.params.id);
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