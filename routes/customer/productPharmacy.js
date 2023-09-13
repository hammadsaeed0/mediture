const express = require("express");
const router = express.Router();

const Model = require("../../models/productPharmacy");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");


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
