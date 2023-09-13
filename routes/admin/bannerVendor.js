const express = require("express");
const router = express.Router();

const Banner = require("../../models/bannerVendor");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", async (req, res) => {
    try {
        const { image, title } = req.body;
        const bannerVendor = await Banner.create({
            image, title
        });
        return res.status(201).json({
            status: "success",
            data: bannerVendor
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id"]), upload.single("image"), async (req, res) => {
    try {
        const bannerVendor = await Banner.findByIdAndUpdate(id, {
            image: newFileName,
        });
        return res.status(200).json({
            status: "success",
            data: bannerVendor
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
        const bannerVendor = await Banner.findByIdAndDelete(id);
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
        const customerPrescriptions = await Banner.find();
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
        const bannerVendor = await Banner.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: bannerVendor
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;
