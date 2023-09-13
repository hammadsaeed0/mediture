const express = require("express");
const router = express.Router();

const FcmMessage = require("../../models/fcmMessage");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["slug", "customerTitle", "customerDescription", "vendorTitle", "vendorDescription", "partnerTitle", "partnerDescription"]), async (req, res) => {
    try {
        let { slug, customerTitle, customerDescription, vendorTitle, vendorDescription, partnerTitle, partnerDescription } = req.body;
        const cancelationReason = await FcmMessage.create({
            slug, customerTitle, customerDescription, vendorTitle, vendorDescription, partnerTitle, partnerDescription
        });
        return res.status(201).json({
            status: "success",
            data: cancelationReason
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "slug", "customerTitle", "customerDescription", "vendorTitle", "vendorDescription", "partnerTitle", "partnerDescription"]), async (req, res) => {
    try {
        let { slug, customerTitle, customerDescription, vendorTitle, vendorDescription, partnerTitle, partnerDescription, id } = req.body;
        const cancelationReason = await FcmMessage.findByIdAndUpdate(id, {
            slug, customerTitle, customerDescription, vendorTitle, vendorDescription, partnerTitle, partnerDescription
        });
        return res.status(200).json({
            status: "success",
            data: cancelationReason
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
        const cancelationReason = await FcmMessage.findByIdAndDelete(id);
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
        const customerPrescriptions = await FcmMessage.find();
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
        const cancelationReason = await FcmMessage.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: cancelationReason
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;