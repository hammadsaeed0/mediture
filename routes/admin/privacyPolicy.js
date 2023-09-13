const express = require("express");
const router = express.Router();

const PrivacyPolicy = require("../../models/privacyPolicy");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["title", "description", "type"]), async (req, res) => {
    try {
        let { title, description, type } = req.body;
        const privacyPolicy = await PrivacyPolicy.create({
            title, description, type
        });
        return res.status(201).json({
            status: "success",
            data: privacyPolicy
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["title", "description", "type"]), async (req, res) => {
    try {
        let { title, type, description, id } = req.body;
        const privacyPolicy = await PrivacyPolicy.findByIdAndUpdate(id, {
            title, description, type
        });
        return res.status(200).json({
            status: "success",
            data: privacyPolicy
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
        const title = await PrivacyPolicy.findByIdAndDelete(id);
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
        const titles = await PrivacyPolicy.find();
        return res.status(200).json({
            status: "success",
            data: titles
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
        const title = await PrivacyPolicy.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: title
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;