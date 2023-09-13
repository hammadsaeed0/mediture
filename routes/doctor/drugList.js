const express = require("express");
const router = express.Router();

const DrugList = require("../../models/drugList");
const { validateInputs } = require("../../functions/validate")

router.post("/new", validateInputs(["type", "drugs", "weight", "dose", "duration", "advice",]), async (req, res) => {
    try {
        let {
            type,
            drugs,
            weight,
            dose,
            duration,
            advice,
        } = req.body;
        const customerPrescription = await DrugList.create({
            type,
            drugs,
            weight,
            dose,
            duration,
            advice,
        });
        return res.status(201).json({
            status: "success",
            data: customerPrescription
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "type", "drugs", "weight", "dose", "duration"]), async (req, res) => {
    try {
        let {
            id,
            type,
            drugs,
            weight,
            dose,
            duration,
            advice,
        } = req.body;
        const customerPrescription = await DrugList.findByIdAndUpdate(id, {
            type,
            drugs,
            weight,
            dose,
            duration,
            advice,
        });
        return res.status(200).json({
            status: "success",
            data: customerPrescription
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
        const customerPrescription = await DrugList.findByIdAndDelete(id);
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
        const customerPrescriptions = await DrugList.find();
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
        const customerPrescription = await DrugList.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: customerPrescription
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;
