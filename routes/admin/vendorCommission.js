const express = require("express");
const router = express.Router();

const VendorCommission = require("../../models/vendorCommission");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["vendorId", "vendorCommission"]), async (req, res) => {
    try {
        let { vendorId, vendorCommission, } = req.body;
        const vendorCommissionDB = await VendorCommission.create({
            vendorId, vendorCommission,
        });
        return res.status(201).json({
            status: "success",
            data: vendorCommissionDB
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "vendorId", "vendorCommission"]), async (req, res) => {
    try {
        let { vendorId, vendorCommission, id } = req.body;
        const vendorCommissionDB = await VendorCommission.findByIdAndUpdate(id, {
            vendorId, vendorCommission,
        });
        return res.status(200).json({
            status: "success",
            data: vendorCommissionDB
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
        const vendorCommissionDB = await VendorCommission.findByIdAndDelete(id);
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
        const customerPrescriptions = await VendorCommission.find();
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
        const vendorCommissionDB = await VendorCommission.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: vendorCommissionDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;