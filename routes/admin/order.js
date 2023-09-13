const express = require("express");
const router = express.Router();

const Order = require("../../models/order");
const { validateInputs } = require("../../functions/validate")

router.post("/new", validateInputs(["vendor", "orderId", "prescriptionId", "customerId", "deliveredBy"]), async (req, res) => {
    try {
        let {
            vendor,
            orderId,
            prescriptionId,
            customerId,
            deliveredBy
        } = req.body;
        const customerPrescription = await Order.create({
            vendor,
            orderId,
            prescriptionId,
            customerId,
            deliveredBy
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

router.post("/edit", validateInputs(["id", "vendor", "orderId", "prescriptionId", "customerId", "deliveredBy"]), async (req, res) => {
    try {
        let {
            id,
            vendor,
            orderId,
            prescriptionId,
            customerId,
            deliveredBy
        } = req.body;
        const customerPrescription = await Order.findByIdAndUpdate(id, {
            vendor,
            orderId,
            prescriptionId,
            customerId,
            deliveredBy
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
        const customerPrescription = await Order.findByIdAndDelete(id);
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
        const customerPrescriptions = await Order.find();
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
        const customerPrescription = await Order.findById(req.params.id);
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