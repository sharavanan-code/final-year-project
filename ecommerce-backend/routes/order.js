const express = require('express');
const Order = require('./models/Order');

const router = express.Router();

// Get all orders
router.get('/', async (req, res) => {
    const orders = await Order.find().populate('user products');
    res.json(orders);
});

// Create an order
router.post('/', async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
});

module.exports = router;
