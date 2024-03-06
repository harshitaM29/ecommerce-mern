const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successful"))
  .catch((err) => console.log(err));
app.listen(process.env.PORT || 5000, () => {
  console.log("running");
});
