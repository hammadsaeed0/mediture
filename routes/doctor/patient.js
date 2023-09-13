const express = require("express");
const router = express.Router();

const Patient = require("../../models/patient");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", upload.single("image"), validateInputs(["email", "firstName", "lastName", "phone", "birthday", "maritalStatus", "sex", "bloodGroup", "weight", "height", "address", "history", "knownDisease", "period", "familyHistory", "diseases"]), async (req, res) => {
    try {
        let { email, phone } = req.body;
        const oldData = await Patient.findOne({
            phone, email
        });
        if (oldData) {
            if (oldData.phone === phone) {
                return res.json({
                    status: "fail",
                    message: "Phone number already exists"
                })
            }
            if (oldData.email === email) {
                return res.json({
                    status: "fail",
                    message: "Email already exists"
                });
            }
        }
        let patient = await Patient.create({ ...req.body, image: newFileName });
        return res.status(201).json({
            status: "success",
            data: patient
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", upload.single("image"), validateInputs(["id", "email", "firstName", "lastName", "phone", "birthday", "maritalStatus", "sex", "bloodGroup", "weight", "height", "address", "history", "knownDisease", "period", "familyHistory", "diseases"]), async (req, res) => {
    try {
        let { email, firstName, id } = req.body;
        const reportDB = await Patient.findByIdAndUpdate(id, {
            ...req.body, image: newFileName
        });
        return res.status(200).json({
            status: "success",
            data: reportDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            firstName: "provide correct parameters"
        });
    }
});

router.post("/delete", validateInputs(["id"]), async (req, res) => {
    try {
        let { id } = req.body;
        const reportDB = await Patient.findByIdAndDelete(id);
        return res.status(200).json({
            status: "success",
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            firstName: "provide valid parameters"
        });
    }
});

router.get("/getAll", async (req, res) => {
    try {
        const customerPrescriptions = await Patient.find();
        return res.status(200).json({
            status: "success",
            data: customerPrescriptions
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            firstName: "no records found"
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const reportDB = await Patient.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: reportDB
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            firstName: "no records found"
        });
    }
})


module.exports = router;
