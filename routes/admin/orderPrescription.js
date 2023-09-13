const express = require("express");
const router = express.Router();

const OrderPrescription = require("../../models/orderPrescription");
const { validateInputs } = require("../../functions/validate")

router.post("/new", validateInputs(["vendor", "customerName", "deliveryAddress", "total", "deliveryCharge"]), async (req, res) => {
    try {
        let {
            vendor,
            customerName,
            deliveryAddress,
            total,
            deliveryCharge,
            endingTime,
            amount,
            invoice
        } = req.body;
        const customerPrescription = await OrderPrescription.create({
            vendor,
            customerName,
            deliveryAddress,
            total,
            deliveryCharge,
            endingTime,
            amount,
            invoice
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

router.post("/edit", validateInputs(["id", "vendor", "customerName", "deliveryAddress", "total", "deliveryCharge"]), async (req, res) => {
    try {
        let {
            id,
            vendor,
            customerName,
            deliveryAddress,
            total,
            deliveryCharge,
            endingTime,
            amount,
            invoice
        } = req.body;
        const customerPrescription = await OrderPrescription.findByIdAndUpdate(id, {
            vendor,
            customerName,
            deliveryAddress,
            total,
            deliveryCharge,
            endingTime,
            amount,
            invoice
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
        const customerPrescription = await OrderPrescription.findByIdAndDelete(id);
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
        const customerPrescriptions = await OrderPrescription.find();
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
        const customerPrescription = await OrderPrescription.findById(req.params.id);
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