const express = require("express");
const router = express.Router();

const Earning = require("../../models/earning");
const { validateInputs } = require("../../functions/validate")

router.post("/new", validateInputs(["customer", "email", "phone"]), async (req, res) => {
    try {
        let {
            customer,
            email,
            phone } = req.body;
        const earning = await Earning.create({
            customer,
            email,
            phone
        });
        return res.status(201).json({
            status: "success",
            data: earning
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "customer", "email", "phone"]), async (req, res) => {
    try {
        let {
            id,
            customer,
            email,
            phone } = req.body;
        const earning = await Earning.findByIdAndUpdate(id, { customer, email, phone });
        return res.status(200).json({
            status: "success",
            data: earning
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
        const earning = await Earning.findByIdAndDelete(id);
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
        const customerPrescriptions = await Earning.find();
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
        const earning = await Earning.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: earning
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;