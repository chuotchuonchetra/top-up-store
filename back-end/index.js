const express = require("express");
const { User } = require("./models");
const { sequelize } = require("./models");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());

dotenv.config();
// Sync database and start server
sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("Error: " + err));
app.get("/test-data", async (req, res) => {
  const users = await User.findAll({ include: "orders" }); // If associations are set
  res.json(users);
});
app.use("/api/v1/games", require("./controllers/gameController"));
// app.use("/api/packages", require("./controllers/packageController"));
app.use("/api/v1/orders", require("./controllers/orderController"));
// app.use("/api/transactions", require("./controllers/transactionController"));
