const express = require("express");
const router = express.Router();

const ProvidingService = require("../../models/providingService");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["name"]), upload.single("image"), async (req, res) => {
    try {
        let { name, } = req.body;
        const providingService = await ProvidingService.create({
            name,
            image: req.file.path
        });
        return res.status(201).json({
            status: "success",
            data: providingService
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["name",]), upload.single("image"), async (req, res) => {
    try {
        let { name, id } = req.body;
        const providingService = await ProvidingService.findByIdAndUpdate(id, {
            name,
            image: newFileName
        });
        return res.status(200).json({
            status: "success",
            data: providingService
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
        const name = await ProvidingService.findByIdAndDelete(id);
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
        const titles = await ProvidingService.find();
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
        const name = await ProvidingService.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: name
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;
