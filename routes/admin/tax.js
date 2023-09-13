const express = require("express");
const router = express.Router();

const Tax = require("../../models/tax");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["tax", "percentage"]), async (req, res) => {
    try {
        let { tax, percentage, } = req.body;
        const taxDB = await Tax.create({
            tax, percentage,
        });
        return res.status(201).json({
            status: "success",
            data: taxDB
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "tax", "percentage"]), async (req, res) => {
    try {
        let { tax, percentage, id } = req.body;
        const taxDB = await Tax.findByIdAndUpdate(id, {
            tax, percentage,
        });
        return res.status(200).json({
            status: "success",
            data: taxDB
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
        const taxDB = await Tax.findByIdAndDelete(id);
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
        const customerPrescriptions = await Tax.find();
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
        const taxDB = await Tax.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: taxDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;