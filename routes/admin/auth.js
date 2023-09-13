const express = require("express");
const router = express.Router();

const Auth = require("../../models/auth");

router.post("/register", async (req, res) => {
    try {
        const response = await Auth.create({
            ...req.body,
        });
        res.json({ response });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "provide correct parameters"
        })
    }
});



module.exports = router;