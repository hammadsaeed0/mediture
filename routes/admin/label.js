const express = require("express");
const router = express.Router();

const Label = require("../../models/label");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["labelName", "labelDeliveryBoy", "labelVendor", "labelAdmin"]), async (req, res) => {
    try {
        let { labelName, labelDeliveryBoy, labelVendor, labelAdmin } = req.body;
        const label = await Label.create({
            labelName, labelDeliveryBoy, labelVendor, labelAdmin
        });
        return res.status(201).json({
            status: "success",
            data: label
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "labelName", "labelDeliveryBoy", "labelVendor", "labelAdmin"]), async (req, res) => {
    try {
        let { labelName, labelDeliveryBoy, labelVendor, labelAdmin, id } = req.body;
        const label = await Label.findByIdAndUpdate(id, {
            labelName, labelDeliveryBoy, labelVendor, labelAdmin
        });
        return res.status(200).json({
            status: "success",
            data: label
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
        const label = await Label.findByIdAndDelete(id);
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
        const customerPrescriptions = await Label.find();
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
        const label = await Label.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: label
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;