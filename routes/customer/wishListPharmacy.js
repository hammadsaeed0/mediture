const router = require('express').Router();

const WishListPharmacy = require("../../models/wishListPharmacy")
const ProductPharmacy = require("../../models/productPharmacy")



router.post('/add', async (req, res) => {
    try {
        const { userId, productId, } = req.body;

        // Find the user's cart or create a new one if it doesn't exist
        let wishList = await WishListPharmacy.findOne({ userId });

        if (!wishList) {
            wishList = new WishListPharmacy({
                userId,
                products: [],
            });
        }

        // Check if the product already exists in the cart
        const existingProductIndex = wishList.products.findIndex(
            (product) => product === productId
        );

        if (existingProductIndex !== -1) {
            // product already exists, update the quantity
            return res.json({ status: "error", message: "Product already exists in wish list" })
        } else {
            // product doesn't exist, add it to the cart
            wishList.products.push(productId);
        }

        // Save the cart to the database
        await wishList.save();

        res.status(200).json({ status: "success", message: 'product added to cart successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: 'An error occurred while adding the product to cart' });
    }
});


router.get('/getByUser/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const wishLish = await WishListPharmacy.findOne({ userId });
        if (wishLish) {
            const final = [];
            for (const one of wishLish.products) {
                const product = await ProductPharmacy.findById(one);
                final.push(product);
            }
            res.json({ status: "success", data: final });
        } else {
            res.status(404).json({ status: "error", error: 'WishList not found' });
        }
    } catch (error) {
        res.status(500).json({ status: "error", error: 'Failed to fetch cart' });
    }
});

router.get('/getAll', async (req, res) => {
    try {
        const carts = await WishListPharmacy.find();
        const final = [];
        for (const cart of carts) {
            const products = [];
            for (const one of cart.products) {
                const product = await ProductPharmacy.findById(one.productId);
                products.push(product);
            }
            final.push({ cart, products });
        }
        return res.json({ status: "success", data: final });
    } catch (error) {
        res.status(500).json({ status: "error", error: 'Failed to fetch cart' });
    }
});



router.delete('/deleteByUser/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const deletedCart = await WishListPharmacy.findOneAndDelete({ userId });
        if (deletedCart) {
            return res.json({ message: 'WishList deleted successfully' });
        } else {
            return res.status(404).json({ error: 'WishList not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete cart' });
    }
});





module.exports = router
