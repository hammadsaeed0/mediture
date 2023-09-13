const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const Customer = require("../../models/customer");
const { upload } = require("../../functions/upload");

router.post("/uploadImage", upload.single("image"), async (req, res, next) => {
    try {
        console.log(req.file);
        let image = newFileName;
        return res.json({
            data: image,
            message: "Image uploaded successfully"
        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            message: "no image uploaded"
        });
    }
});

router.post("/register", async (req, res, next) => {
    try {
        let { email, name, password, phone } = req.body;
        let old = await Customer.findOne({ email, phone });
        if (old) {
            return res.status(400).json({
                status: "error",
                message: "User already exists"
            });
        }
        password = await bcrypt.hash(password, 15);
        let customer = await Customer.create({ email, name, password, phone });
        res.status(201).json({
            status: "success",
            data: customer, message: "Customer added successfully"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: "provide correct parameters"
        });
    }
});

router.post("/login", async (req, res, next) => {
    try {
        let { email, password } = req.body;
        let customer = await Customer.findOne({ email });
        if (!customer) {
            return res.status(400).json({
                status: "error",
                message: "User not found"
            });
        }
        let isMatch = await bcrypt.compare(password, customer.password);
        if (!isMatch) {
            return res.status(400).json({
                status: "error",
                message: "incorrect password"
            });
        }
        res.status(200).json({
            status: "success",
            data: customer, message: "Customer logged in successfully"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: "provide correct parameters"
        });
    }
});

router.post("/edit", async (req, res) => {
    try {
        let { id, name, email, phone, password, image, } = req.body;
        let oldEmail = await Customer.findOne({ email });
        if (oldEmail) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }
        let oldPhone = await Customer.findOne({ phone });
        if (oldPhone) {
            return res.status(400).json({
                message: "Phone already exists"
            });
        }
        let customer = await Customer.findByIdAndUpdate(id, { name, email, phone, password, image, });
        res.status(200).json({ data: customer, message: "Customer updated" });
    } catch (err) {
        return res.status(400).json({
            message: "provide correct parameters"
        });
    }
});

router.get("/getAll", async (req, res) => {
    try {
        let customers = await Customer.find();
        res.status(200).json({ data: customers });
    } catch (err) {
        return res.status(404).json({
            message: "no record found"
        })
    }
});



module.exports = router;
