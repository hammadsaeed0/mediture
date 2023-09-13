const express = require("express");
const router = express.Router();

const Test = require("../../models/test");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["image", "title", "price", "description", "productType", "packSize", "discountPrice", "actualPrice"]), async (req, res) => {
    try {
        let { testName, description, } = req.body;
        const reportDB = await Test.create({
            testName, description,
        });
        return res.status(201).json({
            status: "success",
            data: reportDB
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            description: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "image", "title", "price", "description", "productType", "packSize", "discountPrice", "actualPrice"]), async (req, res) => {
    try {
        let { image, title, price, description, productType, packSize, discountPrice, actualPrice, id } = req.body;
        const reportDB = await Test.findByIdAndUpdate(id, {
            image, title, price, description, productType, packSize, discountPrice, actualPrice
        });
        return res.status(200).json({
            status: "success",
            data: reportDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            description: "provide correct parameters"
        });
    }
});

router.post("/delete", validateInputs(["id"]), async (req, res) => {
    try {
        let { id } = req.body;
        const reportDB = await Test.findByIdAndDelete(id);
        return res.status(200).json({
            status: "success",
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            description: "provide valid parameters"
        });
    }
});

router.get("/getAll", async (req, res) => {
    try {
        const customerPrescriptions = await Test.find();
        return res.status(200).json({
            status: "success",
            data: customerPrescriptions
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            description: "no records found"
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const reportDB = await Test.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: reportDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            description: "no records found"
        });
    }
})


module.exports = router;
