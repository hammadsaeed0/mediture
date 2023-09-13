const express = require("express");
const router = express.Router();

const bannerHome = require("../../models/bannerHome");
const bannerCustomer = require("../../models/bannerCustomer");
const bannerVendor = require("../../models/bannerVendor");

router.get("/getCustomerBanners", async (req, res) => {
    try {
        const banners = await bannerCustomer.find();
        return res.status(200).json({ data: banners });
    } catch (err) {
        return res.status(404).json({
            message: "no data found"
        })
    }
});

router.get("/getHomeBanners", async (req, res) => {
    try {
        const banners = await bannerHome.find();
        return res.status(200).json({ data: banners });
    } catch (err) {
        return res.status(404).json({
            message: "no data found"
        })
    }
});

router.get("/getVendorBanners", async (req, res) => {
    try {
        const banners = await bannerVendor.find();
        return res.status(200).json({ data: banners });
    } catch (err) {
        return res.status(404).json({
            message: "no data found"
        })
    }
});

module.exports = router;