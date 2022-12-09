require("dotenv").config();
const express = require("express");
const todoRoutes = require("./routes/todoRoutes");
const app = express();
require("./config/db").connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", todoRoutes);

module.exports = app;
