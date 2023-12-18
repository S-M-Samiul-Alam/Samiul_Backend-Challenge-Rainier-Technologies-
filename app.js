const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();



var cors = require("cors");

const apiRouter = require("./routes/api.js");


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.use(cors()); 

app.use("/api", apiRouter);

module.exports = app;
