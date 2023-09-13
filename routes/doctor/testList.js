const express = require("express");
const router = express.Router();

const Test = require("../../models/testList");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["test", "description"]), async (req, res) => {
    try {
        let { test, description, } = req.body;
        const reportDB = await Test.create({
            test, description,
        });
        return res.status(201).json({
            status: "success",
            data: reportDB
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            description: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "test", "description"]), async (req, res) => {
    try {
        let { test, description, id } = req.body;
        const reportDB = await Test.findByIdAndUpdate(id, {
            test, description,
        });
        return res.status(200).json({
            status: "success",
            data: reportDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            description: "provide correct parameters"
        });
    }
});

router.post("/delete", validateInputs(["id"]), async (req, res) => {
    try {
        let { id } = req.body;
        const reportDB = await Test.findByIdAndDelete(id);
        return res.status(200).json({
            status: "success",
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            description: "provide valid parameters"
        });
    }
});

router.get("/getAll", async (req, res) => {
    try {
        const customerPrescriptions = await Test.find();
        return res.status(200).json({
            status: "success",
            data: customerPrescriptions
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            description: "no records found"
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const reportDB = await Test.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: reportDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            description: "no records found"
        });
    }
})


module.exports = router;
