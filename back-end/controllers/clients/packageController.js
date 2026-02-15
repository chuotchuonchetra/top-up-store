const router = require("express").Router();
const { where } = require("sequelize");
const { Package } = require("../../models");
router.get("/", async (req, res) => {
  try {
    const { gameId } = req.query;
    const packages = await Package.findAll({
      where: {
        gameId: parseInt(gameId),
      },
    });

    res.json(packages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}); // packageController.js
router.get("/", async (req, res) => {
  try {
    const { gameId } = req.query;

    if (!gameId || isNaN(parseInt(gameId))) {
      return res
        .status(400)
        .json({ error: "A valid numeric gameId is required" });
    }

    const packages = await Package.findAll({
      where: {
        gameId: parseInt(gameId),
      },
    });

    res.json(packages);
  } catch (error) {
    // This will print the ACTUAL error to your terminal so you can see it
    console.error("Sequelize Error:", error);
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
