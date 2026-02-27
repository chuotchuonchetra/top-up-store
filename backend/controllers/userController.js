const { User } = require("../models");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] }, // Best practice: don't send passwords back!
    });
    res.json(users);
    console.log("worked");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Get user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    console.log("err");
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// Create new user
router.post("/", async (req, res) => {
  try {
    const { name, email, password, role, balance } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. CHANGED 'Order.c reate' to 'User.create'
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      balance,
    });

    res.status(201).json(newUser);
  } catch (err) {
    console.error(err); // 3. ADDED LOGGING HERE so you can see errors in console
    res
      .status(500)
      .json({ error: "Failed to create user", details: err.message });
  }
});

module.exports = router;
