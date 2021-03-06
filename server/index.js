const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors())

const db = require("./models");

// Routers
const jobRouter = require("./routes/Jobs");
app.use("/jobs", jobRouter);

const accountRouter = require("./routes/Account");
app.use("/account", accountRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});