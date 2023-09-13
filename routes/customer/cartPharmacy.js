const router = require('express').Router();

const CartPharmacy = require("../../models/cartPharmacy")
const ProductPharmacy = require("../../models/productPharmacy")



router.post('/add', async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        // Find the user's cart or create a new one if it doesn't exist
        let cart = await CartPharmacy.findOne({ userId });

        if (!cart) {
            cart = new CartPharmacy({
                userId,
                products: [],
            });
        }

        // Check if the product already exists in the cart
        const existingProductIndex = cart.products.findIndex(
            (product) => product.productId === productId
        );

        if (existingProductIndex !== -1) {
            // product already exists, update the quantity
            cart.products[existingProductIndex].quantity += quantity;
        } else {
            // product doesn't exist, add it to the cart
            cart.products.push({ productId, quantity });
        }

        // Save the cart to the database
        await cart.save();

        res.status(200).json({ status: "success", message: 'product added to cart successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: 'An error occurred while adding the product to cart' });
    }
});


router.get('/getByUser/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await CartPharmacy.findOne({ userId });
        if (cart) {
            const final = [];
            for (const one of cart.products) {
                const product = await ProductPharmacy.findById(one.productId);
                final.push({ ...one._doc, product });
            }
            res.json({ status: "success", data: { ...cart._doc, products: final } });
        } else {
            res.status(404).json({ status: "error", error: 'Cart not found' });
        }
    } catch (error) {
        res.status(500).json({ status: "error", error: 'Failed to fetch cart' });
    }
});

router.get('/getAll', async (req, res) => {
    try {
        const carts = await CartPharmacy.find();
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
        const deletedCart = await CartPharmacy.findOneAndDelete({ userId });
        if (deletedCart) {
            return res.json({ message: 'Cart deleted successfully' });
        } else {
            return res.status(404).json({ error: 'Cart not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete cart' });
    }
});





module.exports = router
