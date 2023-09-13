const express = require("express");
const router = express.Router();

const Model = require("../../models/productLab");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["image", "title", "price", "description", "lab", "discount"]), async (req, res) => {
    try {
        let { image, title, price, description, lab,
            discount } = req.body;
        const promoCodeDB = await Model.create({
            image, title, price, description, lab,
            discount
        });
        return res.status(201).json({
            status: "success",
            data: promoCodeDB
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["id", "image", "title", "price", "description", "lab", "discount"]), async (req, res) => {
    try {
        let { image, price, description, title, id, lab,
            discount } = req.body;
        const promoCodeDB = await Model.findByIdAndUpdate(id, {
            image, title, price, description, lab,
            discount
        });
        return res.status(200).json({
            status: "success",
            data: promoCodeDB
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
        const image = await Model.findByIdAndDelete(id);
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
        const titles = await Model.find();
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
        const image = await Model.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: image
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;
