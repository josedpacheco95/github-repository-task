const express = require("express");
const authController = require("../../controllers/auth");

const auth = express.Router();

auth.post("/register", authController.postRegister);
auth.post("/login", authController.postLogin);

module.exports = auth;
