const express = require("express");
const router = express.Router();

const Customer = require("../../models/customer");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", upload.single("image"), validateInputs(["email", "name", "phone", "bloodGroup", "password"]), async (req, res) => {
    try {
        let {
            email,
            name,
            phone,
            bloodGroup,
            password
        } = req.body;
        const response = await Customer.findOne({ email, phone });
        if (response) {
            return res.status(400).json({
                message: "user already exists"
            });
        }
        const customer = await Customer.create({
            email,
            name,
            phone,
            bloodGroup,
            password,
            image: newFileName
        });
        return res.status(201).json({
            status: "success",
            data: customer
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", upload.single("image"), validateInputs(["email", "name", "phone", "bloodGroup", "password", "id"]), async (req, res) => {
    try {
        let {
            id,
            email,
            name,
            phone,
            bloodGroup,
            password,
        } = req.body;
        const customer = await Customer.findByIdAndUpdate(id,
            {
                email,
                name,
                phone,
                bloodGroup,
                password,
                image: newFileName
            });
        return res.status(200).json({
            status: "success",
            data: customer
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
        const customer = await Customer.findByIdAndDelete(id);
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
        const customers = await Customer.find();
        return res.status(200).json({
            status: "success",
            data: customers
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
        const customer = await Customer.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: customer
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;
