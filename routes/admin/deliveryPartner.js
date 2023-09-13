const express = require("express");
const router = express.Router();

const DeliveryPartner = require("../../models/deliveryPartner");
const { validateInputs } = require("../../functions/validate");
const { upload } = require("../../functions/upload");

router.post("/new", upload.single("image"), validateInputs(["email", "name", "phone", "password"]), async (req, res) => {
    try {
        let {
            email,
            name,
            phone,
            password
        } = req.body;
        const response = await DeliveryPartner.findOne({ email, phone });
        if (response) {
            return res.status(400).json({
                message: "user already exists"
            });
        }
        const deliveryPartner = await DeliveryPartner.create({
            email,
            name,
            phone,
            password,
            image: newFileName
        });
        return res.status(201).json({
            status: "success",
            data: deliveryPartner
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});

router.post("/edit", upload.single("image"), validateInputs(["email", "name", "phone", "password", "id"]), async (req, res) => {
    try {
        let {
            id,
            email,
            name,
            phone,
            password,
        } = req.body;
        const deliveryPartner = await DeliveryPartner.findByIdAndUpdate(id,
            {
                email,
                name,
                phone,
                password,
                image: newFileName
            });
        return res.status(200).json({
            status: "success",
            data: deliveryPartner
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
        const deliveryPartner = await DeliveryPartner.findByIdAndDelete(id);
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
        const customers = await DeliveryPartner.find();
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
        const deliveryPartner = await DeliveryPartner.findById(req.params.id);
        return res.status(200).json({
            status: "success",
            data: deliveryPartner
        });
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: "no records found"
        });
    }
})


module.exports = router;
