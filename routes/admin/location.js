const express = require("express");
const router = express.Router();

const Location = require("../../models/location");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");
// 
router.post("/new", validateInputs(["location", "zipCode"]), async (req, res) => {
    try {
        let { location, zipCode } = req.body;
        const locationDB = await Location.create({
            location, zipCode
        });
        return res.status(201).json({
            status: "success",
            data: locationDB
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", validateInputs(["location", "zipCode"]), async (req, res) => {
    try {
        let { location, zipCode, id } = req.body;
        const locationDB = await Location.findByIdAndUpdate(id, {
            location, zipCode
        });
        return res.status(200).json({
            status: "success",
            data: location
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
        const location = await Location.findByIdAndDelete(id);
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
        const locations = await Location.find();
        return res.status(200).json({
            status: "success",
            data: locations
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
        const location = await Location.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: location
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;