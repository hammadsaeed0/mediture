const express = require("express");
const router = express.Router();

const WithdrawalOption = require("../../models/withdrawalOption");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["option"]), async (req, res) => {
    try {
        let { option } = req.body;
        const withdrawalOption = await WithdrawalOption.create({
            option
        });
        return res.status(201).json({
            status: "success",
            data: withdrawalOption
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "option"]), async (req, res) => {
    try {
        let { option, id } = req.body;
        const withdrawalOption = await WithdrawalOption.findByIdAndUpdate(id, {
            option
        });
        return res.status(200).json({
            status: "success",
            data: withdrawalOption
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
        const withdrawalOption = await WithdrawalOption.findByIdAndDelete(id);
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
        const customerPrescriptions = await WithdrawalOption.find();
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
        const withdrawalOption = await WithdrawalOption.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: withdrawalOption
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;