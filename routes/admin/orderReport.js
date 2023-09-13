const express = require("express");
const router = express.Router();

const OrderReport = require("../../models/orderReport");
const { validateInputs } = require("../../functions/validate")

router.post("/new", validateInputs(["vendor", "orderId", "address", "customer", "deliveredBy", "subTotal", "total", "discount"]), async (req, res) => {
    try {
        let {
            vendor,
            orderId,
            address,
            customer,
            deliveredBy,
            subTotal,
            total,
            discount
        } = req.body;
        const customerPrescription = await OrderReport.create({
            vendor,
            orderId,
            address,
            customer,
            deliveredBy,
            subTotal,
            total,
            discount
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

router.post("/edit", validateInputs(["id", "vendor", "orderId", "address", "customer", "deliveredBy"]), async (req, res) => {
    try {
        let {
            id,
            vendor,
            orderId,
            address,
            customer,
            deliveredBy,
            subTotal,
            total,
            discount
        } = req.body;
        const customerPrescription = await OrderReport.findByIdAndUpdate(id, {
            vendor,
            orderId,
            address,
            customer,
            deliveredBy,
            subTotal,
            total,
            discount
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
        const customerPrescription = await OrderReport.findByIdAndDelete(id);
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
        const customerPrescriptions = await OrderReport.find();
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
        const customerPrescription = await OrderReport.findById(req.params.id);
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