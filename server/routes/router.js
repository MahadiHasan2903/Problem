const express = require("express");

const {
  registerController,
  loginController,
  logoutController,
} = require("../controllers/controllers");
const { authenticateToken } = require("../middleware/auth");

//router abject
const router = new express.Router();
//routes

//POST  || registration
router.post("/register", registerController);

//POST  || registration
router.post("/login", loginController);

//GET || logout
router.get("/logout", authenticateToken, logoutController);

module.exports = router;
