//orderController.js
const { Order, Package, User } = require("../models");
const router = require("express").Router();

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: Package,
          attributes: ["amount", "price", "title"],
          as: "package",
        }, // Get package info
        { model: User, as: "user", attributes: ["name", "role"] },
      ],
    });
    res.json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// Get order by ID
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch order" });
  }
});

// Create new order
router.post("/", async (req, res) => {
  try {
    const { userId, packageId, gameUserId, serverId, paymentMethod } = req.body;
    const newOrder = await Order.create({
      userId,
      packageId,
      gameUserId,
      serverId,
      paymentMethod,
    });
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: "Failed to create order" });
  }
});

module.exports = router;
