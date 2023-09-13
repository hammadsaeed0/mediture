const express = require("express");
const router = express.Router();

const Vendor = require("../../models/vendor");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", upload.single("profilePicture"), validateInputs(["ownerName", "storeName", "userName", "phone", "email", "wallet", "password"]), async (req, res) => {
    try {
        let {
            ownerName,
            storeName,
            userName,
            phone,
            email,
            wallet,
            password
        } = req.body;
        const customerPrescription = await Vendor.create({
            ownerName,
            storeName,
            userName,
            phone,
            email,
            wallet,
            password,
            profilePicture: newFileName,
        });
        return res.status(201).json({
            status: "success",
            data: customerPrescription
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters",
            fields: req.body
        })
    }
});

router.post("/edit", upload.single("profilePicture"), validateInputs(["id", "ownerName", "storeName", "userName", "phone", "email", "wallet"]), async (req, res) => {
    try {
        let {
            id,
            ownerName,
            storeName,
            userName,
            phone,
            email,
            wallet,
            password
        } = req.body;
        const customerPrescription = await Vendor.findByIdAndUpdate(id, {
            ownerName,
            storeName,
            userName,
            phone,
            email,
            wallet,
            profilePicture: newFileName,
            password
        });
        return res.status(200).json({
            status: "success",
            data: customerPrescription
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
        const customerPrescription = await Vendor.findByIdAndDelete(id);
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
        const customerPrescriptions = await Vendor.find();
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
        const customerPrescription = await Vendor.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: customerPrescription
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;
