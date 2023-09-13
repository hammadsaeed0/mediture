const express = require("express");
const router = express.Router();

const ImportExcel = require("../../models/importExcel");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", upload.single("file"), validateInputs(["vendor"]), async (req, res) => {
    try {
        let { vendor } = req.body;
        const importExcel = await ImportExcel.create({
            vendor,
            file: newFileName
        });
        return res.status(201).json({
            status: "success",
            data: importExcel
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", upload.single("file"), validateInputs(["id", "vendor"]), async (req, res) => {
    try {
        let { vendor, id } = req.body;
        const importExcel = await ImportExcel.findByIdAndUpdate(id, {
            vendor,
            file: newFileName
        });
        return res.status(200).json({
            status: "success",
            data: importExcel
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
        const importExcel = await ImportExcel.findByIdAndDelete(id);
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
        const customerPrescriptions = await ImportExcel.find();
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
        const importExcel = await ImportExcel.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: importExcel
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;
