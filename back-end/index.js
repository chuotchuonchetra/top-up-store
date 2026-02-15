const express = require("express");
const { User } = require("./models");
const { sequelize } = require("./models");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173", // Allow only your frontend
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true, // Allow cookies/headers if needed later
  }),
);
app.use(express.json());
// 2. Enable CORS for your frontend
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
