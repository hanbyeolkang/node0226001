"use strict";

// module
const express = require("express");
const app = express();

// routing
const home = require("./src/routes/home");

// app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들웨어 등록 메서드

module.exports = app;