const express = require("express");
const router = express.Router();

const Faq = require("../../models/faq");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["question", "answer", "type"]), async (req, res) => {
    try {
        let { question, answer, type } = req.body;
        const faq = await Faq.create({
            question, answer, type
        });
        return res.status(201).json({
            status: "success",
            data: faq
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["question", "answer", "type"]), async (req, res) => {
    try {
        let { question, answer, type, id } = req.body;
        const faq = await Faq.findByIdAndUpdate(id, {
            question, answer, type
        });
        return res.status(200).json({
            status: "success",
            data: faq
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
        const faq = await Faq.findByIdAndDelete(id);
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
        const customerPrescriptions = await Faq.find();
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
        const faq = await Faq.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: faq
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;