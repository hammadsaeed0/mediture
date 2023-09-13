const express = require("express");
const router = express.Router();

const PromoCode = require("../../models/promoCode");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", validateInputs(["promoName", "description", "type", "promoCode", "discount"]), async (req, res) => {
    try {
        let { promoName, description, type, promoCode, discount } = req.body;
        const promoCodeDB = await PromoCode.create({
            promoName, description, type, promoCode, discount
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

router.post("/edit", validateInputs(["promoName", "description", "type", "promoCode", "discount"]), async (req, res) => {
    try {
        let { promoName, type, promoCode, discount, description, id } = req.body;
        const promoCodeDB = await PromoCode.findByIdAndUpdate(id, {
            promoName, description, type, promoCode, discount
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
        const promoName = await PromoCode.findByIdAndDelete(id);
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
        const titles = await PromoCode.find();
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
        const promoName = await PromoCode.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: promoName
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;