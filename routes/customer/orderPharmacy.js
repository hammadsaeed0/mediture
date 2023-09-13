const express = require('express');
const OrderPharmacy = require('../../models/orderPharmacy');
const CartPharmacy = require('../../models/cartPharmacy');
const ProductPharmacy = require('../../models/productPharmacy');
const Customer = require('../../models/customer');
const router = express.Router();

router.post('/placeOrder', async (req, res) => {
    try {
        const { userId, shippingAddress, name, phone, totalPrice } = req.body;

        // Retrieve the user's cart
        const cart = await CartPharmacy.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Create the order
        const order = new OrderPharmacy({
            userId: cart.userId,
            products: cart.products,
            totalPrice,
            shippingAddress,
            status: 'pending',
            name,
            phone
        });

        // Save the order to the database
        await order.save();

        // Clear the user's cart
        await CartPharmacy.findOneAndDelete({ userId });

        res.status(200).json({ status: "success", message: 'Order placed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: 'An error occurred while placing the order' });
    }
});


const calculateTotalPrice = (products) => {
    let totalPrice = 0;
    products.forEach((product) => {
        totalPrice += product.quantity * getProductPrice(product.productId); // Implement getProductPrice based on your specific logic
    });
    return totalPrice;
};


const getProductPrice = async (productId) => {
    // Implement logic to retrieve the price of a product based on the productId
    const product = await ProductPharmacy.findById(productId);
    return product.price
};


router.get("/getAll", async (req, res) => {
    try {
        const records = await OrderPharmacy.find();
        const final = [];
        for (const record of records) {
            const customer = await Customer.findById(record.userId);
            const products = [];
            for (const one of record.products) {
                const product = await ProductPharmacy.findById(one.productId);
                products.push(product);
            }
            final.push({ ...record._doc, customer, products });
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
