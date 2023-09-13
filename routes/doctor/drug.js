const express = require("express");
const router = express.Router();

const Drug = require("../../models/drug");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["tradeName", "genericName", "comments"]), async (req, res) => {
    try {
        let { tradeName, genericName, comments } = req.body;
        const reportDB = await Drug.create({
            tradeName, genericName, comments
        });
        return res.status(201).json({
            status: "success",
            data: reportDB
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            genericName: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "tradeName", "genericName", "comments"]), async (req, res) => {
    try {
        let { tradeName, genericName, id, comments } = req.body;
        const reportDB = await Drug.findByIdAndUpdate(id, {
            tradeName, genericName, comments
        });
        return res.status(200).json({
            status: "success",
            data: reportDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            genericName: "provide correct parameters"
        });
    }
});

router.post("/delete", validateInputs(["id"]), async (req, res) => {
    try {
        let { id } = req.body;
        const reportDB = await Drug.findByIdAndDelete(id);
        return res.status(200).json({
            status: "success",
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            genericName: "provide valid parameters"
        });
    }
});

router.get("/getAll", async (req, res) => {
    try {
        const customerPrescriptions = await Drug.find();
        return res.status(200).json({
            status: "success",
            data: customerPrescriptions
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            genericName: "no records found"
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const reportDB = await Drug.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: reportDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            genericName: "no records found"
        });
    }
})


module.exports = router;
