const express = require("express");
const router = express.Router();

const Doctor = require("../../models/doctor");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", upload.single("image"), validateInputs(["email", "name", "phone", "specialist", "documentStatus", "documentApprovedStatus", "profileStatus", "specialistSubCat", "description", "experience", "qualification", "gender", "username", "password"]), async (req, res) => {
    try {
        let { email, name, phone, specialist, documentStatus, documentApprovedStatus, profileStatus, specialistSubCat, description, experience, qualification, gender, username, password } = req.body;
        const doctor = await Doctor.create({
            email, name, phone, specialist, documentStatus, documentApprovedStatus, profileStatus, specialistSubCat, description, experience, qualification, gender, username, password, image: newFileName
        });
        return res.status(201).json({
            status: "success",
            data: doctor
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", upload.single("image"), validateInputs(["id", "email", "name", "phone", "specialist", "documentStatus", "documentApprovedStatus", "profileStatus", "specialistSubCat", "description", "experience", "qualification", "gender", "username", "password"]), async (req, res) => {
    try {
        let { email, name, phone, specialist, documentStatus, documentApprovedStatus, profileStatus, id, specialistSubCat, description, experience, qualification, gender, username, password } = req.body;
        const doctor = await Doctor.findByIdAndUpdate(id, {
            email, name, phone, specialist, documentStatus, documentApprovedStatus, profileStatus, specialistSubCat, description, experience, qualification, gender, username, password, image: newFileName
        });
        return res.status(200).json({
            status: "success",
            data: doctor
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
        const doctor = await Doctor.findByIdAndDelete(id);
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
        const customerPrescriptions = await Doctor.find();
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
        const doctor = await Doctor.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: doctor
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;
