const express = require("express");
const router = express.Router();

const BloodGroup = require("../../models/bloodGroup");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["name"]), async (req, res) => {
    try {
        let { name } = req.body;
        const bloodGroup = await BloodGroup.create({
            name
        });
        return res.status(201).json({
            status: "success",
            data: bloodGroup
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "name"]), async (req, res) => {
    try {
        let { name, id } = req.body;
        const bloodGroup = await BloodGroup.findByIdAndUpdate(id, {
            name
        });
        return res.status(200).json({
            status: "success",
            data: bloodGroup
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
        const bloodGroup = await BloodGroup.findByIdAndDelete(id);
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
        const customerPrescriptions = await BloodGroup.find();
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
        const bloodGroup = await BloodGroup.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: bloodGroup
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;