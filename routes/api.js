const express = require("express");
const app = express();
const verifyToken = require('../middleware/verifyToken');

const course = require("./course-route");
const authRoutes = require('./auth-route');

app.use('/auth', authRoutes);

app.use('/course', verifyToken, course)

module.exports = app;