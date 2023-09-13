const express = require("express");
const router = express.Router();

const Report = require("../../models/report");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["email", "message"]), async (req, res) => {
    try {
        let { email, message, } = req.body;
        const reportDB = await Report.create({
            email, message,
        });
        return res.status(201).json({
            status: "success",
            data: reportDB
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "email", "message"]), async (req, res) => {
    try {
        let { email, message, id } = req.body;
        const reportDB = await Report.findByIdAndUpdate(id, {
            email, message,
        });
        return res.status(200).json({
            status: "success",
            data: reportDB
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
        const reportDB = await Report.findByIdAndDelete(id);
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
        const customerPrescriptions = await Report.find();
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
        const reportDB = await Report.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: reportDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;