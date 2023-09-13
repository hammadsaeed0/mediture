const express = require("express");
const router = express.Router();

const VendorDocument = require("../../models/vendorDocument");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", upload.fields([{ name: "idProof" }, { name: "certificate" }]), validateInputs(["vendorId", "idProofStatus", "certificateStatus"]), async (req, res) => {
    try {
        let { vendorId, idProofStatus, certificateStatus } = req.body;
        let data = {};
        Object.keys(req.files).forEach((key) => {
            let path = req.files[key][0].path.slice(6);
            data[key] = path;
        });
        const vendorCommissionDB = await VendorDocument.create({
            vendorId, idProofStatus, certificateStatus, ...data
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

router.post("/edit", validateInputs(["id", "vendorId", "idProofStatus", "certificateStatus"]), upload.fields([{ name: "idProof" }, { name: "certificate" }]), async (req, res) => {
    try {
        let { vendorId, idProofStatus, certificateStatus, id } = req.body;
        let data = {};
        Object.keys(req.files).forEach((key) => {
            let path = req.files[key][0].path.slice(6);
            data[key] = path;
        });
        const vendorCommissionDB = await VendorDocument.findByIdAndUpdate(id, {
            vendorId, idProofStatus, certificateStatus, ...data
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
        const vendorCommissionDB = await VendorDocument.findByIdAndDelete(id);
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
        const customerPrescriptions = await VendorDocument.find();
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
        const vendorCommissionDB = await VendorDocument.findById(req.params.id);
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