const express = require("express");
const router = express.Router();

const DoctorCategory = require("../../models/doctorCategory");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", upload.single("categoryImage"), validateInputs(["categoryName"]), async (req, res) => {
    try {
        let { categoryName } = req.body;
        const doctorCategory = await DoctorCategory.create({
            categoryName,
            categoryImage: newFileName
        });
        return res.status(201).json({
            status: "success",
            data: doctorCategory
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", upload.single("categoryImage"), validateInputs(["id", "categoryName"]), async (req, res) => {
    try {
        let { categoryName, id } = req.body;
        const doctorCategory = await DoctorCategory.findByIdAndUpdate(id, {
            categoryName,
            categoryImage: newFileName
        });
        return res.status(200).json({
            status: "success",
            data: doctorCategory
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
        const doctorCategory = await DoctorCategory.findByIdAndDelete(id);
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
        const customerPrescriptions = await DoctorCategory.find();
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
        const doctorCategory = await DoctorCategory.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: doctorCategory
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;
