//gameController.js
const { Game } = require("../../models");
const router = require("express").Router();

// Get all games
router.get("/", async (req, res) => {
  try {
    const games = await Game.findAll({ include: "packages" }); // Include associated packages
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch games" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findByPk(req.params.id, { include: "packages" }); // Include associated packages
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch game" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, slug, publisher, status } = req.body;
    const newGame = await Game.create({ name, slug, publisher, status });
    res.status(201).json(newGame);
  } catch (err) {
    res.status(500).json({ error: "Failed to create game" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { name, slug, publisher, status } = req.body;
    const game = await Game.findByPk(req.params.id);
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    await game.update({ name, slug, publisher, status });
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: "Failed to update game" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const game = await Game.findByPk(req.params.id);
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    await game.destroy();
    res.json({ message: "Game deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete game" });
  }
});
module.exports = router;
