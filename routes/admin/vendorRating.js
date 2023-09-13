const express = require("express");
const router = express.Router();

const VendorEarning = require("../../models/vendorEarning");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["customerName", "vendorName", "orderName", "rating"]), async (req, res) => {
    try {
        let { customerName, vendorName, orderName, rating } = req.body;
        const vendorEarning = await VendorEarning.create({
            customerName, vendorName, orderName, rating
        });
        return res.status(201).json({
            status: "success",
            data: vendorEarning
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "customerName", "vendorName", "orderName", "rating"]), async (req, res) => {
    try {
        let { customerName, vendorName, orderName, rating, id } = req.body;
        const vendorEarning = await VendorEarning.findByIdAndUpdate(id, {
            customerName, vendorName, orderName, rating
        });
        return res.status(200).json({
            status: "success",
            data: vendorEarning
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
        const vendorEarning = await VendorEarning.findByIdAndDelete(id);
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
        const customerPrescriptions = await VendorEarning.find();
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
        const vendorEarning = await VendorEarning.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: vendorEarning
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;