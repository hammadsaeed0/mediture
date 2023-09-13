const express = require("express");
const router = express.Router();

const DoctorSubCategory = require("../../models/doctorSubCategory");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", upload.single("categoryImage"), validateInputs(["category", "subCategoryName"]), async (req, res) => {
    try {
        let { category, subCategoryName, categoryImage } = req.body;
        const doctorSubCategory = await DoctorSubCategory.create({
            category, subCategoryName, categoryImage: newFileName
        });
        return res.status(201).json({
            status: "success",
            data: doctorSubCategory
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", upload.single("categoryImage"), validateInputs(["id", "category", "subCategoryName"]), async (req, res) => {
    try {
        let { category, subCategoryName, categoryImage, id } = req.body;
        const doctorSubCategory = await DoctorSubCategory.findByIdAndUpdate(id, {
            category, subCategoryName, categoryImage: newFileName
        });
        return res.status(200).json({
            status: "success",
            data: doctorSubCategory
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
        const doctorSubCategory = await DoctorSubCategory.findByIdAndDelete(id);
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
        const customerPrescriptions = await DoctorSubCategory.find();
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
        const doctorSubCategory = await DoctorSubCategory.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: doctorSubCategory
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;
