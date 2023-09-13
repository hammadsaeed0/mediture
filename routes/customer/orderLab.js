const express = require('express');
const OrderLab = require('../../models/orderLab');
const CartLab = require('../../models/cartLab');
const TestLab = require('../../models/test');
const Customer = require('../../models/customer');
const router = express.Router();

router.post('/placeOrder', async (req, res) => {
    try {
        const { userId, shippingAddress, name, phone, totalPrice } = req.body;

        // Retrieve the user's cart
        const cart = await CartLab.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Create the order
        const order = new OrderLab({
            userId: cart.userId,
            tests: cart.tests,
            totalPrice,
            shippingAddress,
            name,
            phone,
            status: 'pending',
        });

        // Save the order to the database
        await order.save();

        // Clear the user's cart
        await CartLab.findOneAndDelete({ userId });

        res.status(200).json({ status: "success", message: 'Order placed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: 'An error occurred while placing the order' });
    }
});


const calculateTotalPrice = (tests) => {
    let totalPrice = 0;
    tests.forEach((test) => {
        totalPrice += test.quantity * getTestPrice(test.testId); // Implement getTestPrice based on your specific logic
    });
    return totalPrice;
};


const getTestPrice = async (testId) => {
    // Implement logic to retrieve the price of a Test based on the testId
    const test = await TestLab.findById(testId);
    return test.actualPrice
};


router.get("/getAll", async (req, res) => {
    try {
        const records = await OrderLab.find();
        const final = [];
        for (const record of records) {
            const customer = await Customer.findById(record.userId);
            const tests = [];
            for (const one of record.tests) {
                const test = await TestLab.findById(one.testId);
                tests.push(test);
            }
            final.push({ ...record._doc, customer, tests });
        }
        return res.json({
            status: "success",
            data: final
        })
    } catch (error) {
        return res.json({
            status: "error",
            message: error.message
        })
    }
})




module.exports = router;
