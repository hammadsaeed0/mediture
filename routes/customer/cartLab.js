const router = require('express').Router();

const CartLab = require("../../models/cartLab")
const ProductLab = require("../../models/productLab")



router.post('/add', async (req, res) => {
    try {
        const { userId, testId, quantity } = req.body;

        // Find the user's cart or create a new one if it doesn't exist
        let cart = await CartLab.findOne({ userId });

        if (!cart) {
            cart = new CartLab({
                userId,
                tests: [],
            });
        }

        // Check if the test already exists in the cart
        const existingTestIndex = cart.tests.findIndex(
            (test) => test.testId === testId
        );

        if (existingTestIndex !== -1) {
            // test already exists, update the quantity
            cart.tests[existingTestIndex].quantity += quantity;
        } else {
            // test doesn't exist, add it to the cart
            cart.tests.push({ testId, quantity });
        }

        // Save the cart to the database
        await cart.save();

        res.status(200).json({ message: 'test added to cart successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while adding the test to cart' });
    }
});


router.get('/getByUser/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await CartLab.findOne({ userId });
        if (cart) {
            const final = [];
            for (const one of cart.tests) {
                const test = await ProductLab.findById(one.testId);
                final.push({ ...one._doc, test });
            }
            return res.json({ status: "success", data: { ...cart._doc, tests: final } });
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cart' });
    }
});



router.delete('/deleteByUser/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const deletedCart = await CartLab.findOneAndDelete({ userId });
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
