const express = require("express");
const { sequelize } = require("./models");
const app = express();

app.use(express.json());

const PORT = 3000;

// Sync database and start server
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("Error: " + err));
