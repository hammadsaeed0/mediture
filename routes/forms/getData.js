const express = require("express");
const router = express.Router();

const FormDoctor = require("../../models/formDoctor");
const FormHospital = require("../../models/formHospital");
const FormPharmacy = require("../../models/formPharmacy");
const FormLab = require("../../models/formLaboratory");

router.get("/allDoctors", async (req, res) => {
    try {
        const data = await FormDoctor.find({});
        return res.json({ status: "success", data })
    } catch (error) {
        res.json({ status: "error", message: "No record found" })
    }
})

router.get("/allHospitals", async (req, res) => {
    try {
        const data = await FormHospital.find({});
        return res.json({ status: "success", data })
    } catch (error) {
        res.json({ status: "error", message: "No record found" })
    }
})

router.get("/allLabs", async (req, res) => {
    try {
        const data = await FormLab.find({});
        return res.json({ status: "success", data })
    } catch (error) {
        res.json({ status: "error", message: "No record found" })
    }
})

router.get("/allPharmacies", async (req, res) => {
    try {
        const data = await FormPharmacy.find({});
        return res.json({ status: "success", data })
    } catch (error) {
        res.json({ status: "error", message: "No record found" })
    }
})

router.get("/pharmacy/:id", async (req, res) => {
    try {
        const data = await FormPharmacy.findById(req.params.id);
        return res.json({ status: "success", data })
    } catch (error) {
        res.json({ status: "error", message: "No record found" })
    }
})

router.get("/doctor/:id", async (req, res) => {
    try {
        const data = await FormDoctor.findById(req.params.id);
        return res.json({ status: "success", data })
    } catch (error) {
        res.json({ status: "error", message: "No record found" })
    }
})
router.get("/hospital/:id", async (req, res) => {
    try {
        const data = await FormHospital.findById(req.params.id);
        return res.json({ status: "success", data })
    } catch (error) {
        res.json({ status: "error", message: "No record found" })
    }
})
router.get("/lab/:id", async (req, res) => {
    try {
        const data = await FormLab.findById(req.params.id);
        return res.json({ status: "success", data })
    } catch (error) {
        res.json({ status: "error", message: "No record found" })
    }
})



module.exports = router;
