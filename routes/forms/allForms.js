const express = require("express");
const router = express.Router();

const { validateInputs } = require("../../functions/validate");

const FormDoctor = require("../../models/formDoctor");
const FormHospital = require("../../models/formHospital");
const FormLaboratory = require("../../models/formLaboratory");
const FormNutritionist = require("../../models/formNutritionist");
const FormParamedic = require("../../models/formParamedic");
const FormPharmacy = require("../../models/formPharmacy");
const FormPhysiotherapist = require("../../models/formPhysiotherapist");
const FormPsychologist = require("../../models/formPsychologist");
const FormAmbulance = require("../../models/formAmbulance");
const FormUser = require("../../models/formUser");
const { upload } = require("../../functions/upload");


router.post("/uploadFile", upload.single("file"), (req, res) => {
    try {
        const image = req.file.path;
        return res.json({ status: "success", fileUrl: image });
    } catch (error) {
        return res.status(404).json({ status: "error", message: "No image received" });
    }
});


router.post("/formDoctor", validateInputs(["name", "gender", "fatherORHusband", "dob", "nic", "address", "city", "country", "qualification", "specialty", "hospitalName", "hospitalAddress", "clinicAddress", "pmdc", "expiry", "email", "phone", "bank", "ntn", "facebook", "instagram", "picture", "documents"]), async (req, res) => {
    try {
        const data = req.body;
        const saved = await FormDoctor.create({ ...data });
        return res.json({ data: saved });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Invalid fields given", error: error.message });
    }
})


router.post("/formHospital", validateInputs(["name", "license", "owner", "authorizedPerson", "authorizedPersonNic", "address", "city", "country", "specialty", "consultant", "timing", "pmdcConsultant", "PmdcExpiryConsultant", "email", "phone", "paramedic", "physiotherapist", "psychologist", "pharmacy", "drugLicense", "drugLicenseExpiry", "laboratory", "consultantPathologist", "pmdcPathologist", "expiryPmdcPathologist", "laboratoryTestDetail", "email", "phone", "emergencyNumber", "bankDetails", "ntn", "facebook", "instagram", "picture", "documents"]), async (req, res) => {
    try {
        const data = req.body;
        const saved = await FormHospital.create({ ...data });
        return res.json({ data: saved });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Invalid fields given", error: error.message });
    }
})


router.post("/formLaboratory", validateInputs(["name", "license", "owner", "pathologist", "authorizedPerson", "address", "city", "country", "testDetails", "pmdc", "expiry", "email", "phone", "bank", "ntn", "facebook", "instagram", "picture", "documents"]), async (req, res) => {
    try {
        const data = req.body;
        const saved = await FormLaboratory.create({ ...data });
        return res.json({ data: saved });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Invalid fields given", error: error.message });
    }
})


router.post("/formNutritionist", validateInputs(["name", "gender", "fatherORHusband", "dob", "nic", "address", "city", "country", "qualification", "experience", "hospitalName", "hospitalAddress", "clinicAddress", "license", "expiry", "email", "phone", "bank", "ntn", "facebook", "instagram", "picture", "documents"]), async (req, res) => {
    try {
        const data = req.body;
        const saved = await FormNutritionist.create({ ...data });
        return res.json({ data: saved });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Invalid fields given", error: error.message });
    }
})


router.post("/formParamedic", validateInputs(["name", "gender", "fatherORHusband", "dob", "nic", "address", "city", "country", "qualification", "experience", "hospitalName", "hospitalAddress", "clinicAddress", "license", "expiry", "email", "phone", "bank", "ntn", "facebook", "instagram", "picture", "documents"]), async (req, res) => {
    try {
        const data = req.body;
        const saved = await FormParamedic.create({ ...data });
        return res.json({ data: saved });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Invalid fields given", error: error.message });
    }
})


router.post("/formPharmacy", validateInputs(["name", "license", "licenseIssue", "licenseExpiry", "owner", "pharmacist", "authorizedPerson", "address", "city", "country", "medicineDetails", "brandName", "genericName", "therapeuticGroup", "content", "indication", "dosage", "interaction", "precaution", "sideEffect", "price", "productImage", "email", "phone", "bank", "ntn", "picture", "documents"]), async (req, res) => {
    try {
        const data = req.body;
        const saved = await FormPharmacy.create({ ...data });
        return res.json({ data: saved });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Invalid fields given", error: error.message });
    }
})


router.post("/formPhysiotherapist", validateInputs(["name", "gender", "fatherORHusband", "dob", "nic", "address", "city", "country", "qualification", "experience", "hospitalName", "hospitalAddress", "clinicAddress", "license", "expiry", "email", "phone", "bank", "ntn", "facebook", "instagram", "picture", "documents"]), async (req, res) => {
    try {
        const data = req.body;
        const saved = await FormPhysiotherapist.create({ ...data });
        return res.json({ data: saved });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Invalid fields given", error: error.message });
    }
})


router.post("/formPsychologist", validateInputs(["name", "gender", "fatherORHusband", "dob", "nic", "address", "city", "country", "qualification", "experience", "hospitalName", "hospitalAddress", "clinicAddress", "license", "expiry", "email", "phone", "bank", "ntn", "facebook", "instagram", "picture", "documents"]), async (req, res) => {
    try {
        const data = req.body;
        const saved = await FormPsychologist.create({ ...data });
        return res.json({ data: saved });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Invalid fields given", error: error.message });
    }
});


router.post("/formAmbulance", validateInputs(["companyName", "companyDetail", "authPersonDetail", "nic", "city", "country", "qualification", "equipmentDetail", "registrationNum", "emergencyContact", "email", "phone", "bank", "ntn", "facebook", "instagram", "picture", "documents"]), async (req, res, next) => {
    try {
        const data = req.body;
        const saved = await FormAmbulance.create({ ...data });
        return res.json({ data: saved });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Invalid fields given", error: error.message });
    }
});


router.post("/formUser", validateInputs(["name", "gender", "fatherORHusband", "dob", "nic", "address", "city", "country", "qualification", "phone", "email", "password", "bank", "ntn", "facebook", "instagram", "picture", "documents"]), async (req, res, next) => {
    try {
        const data = req.body;
        const saved = await FormUser.create({ ...data });
        return res.json({ data: saved });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Invalid fields given", error: error.message });
    }
});


module.exports = router;
