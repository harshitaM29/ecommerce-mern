const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
require("dotenv").config();
const app = express();
app.use(bodyParser.json({ extended: false }));
app.use("/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => console.log(err));
