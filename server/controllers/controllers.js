const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists." });
    }

    const user = new User({ name, email, password });
    await user.save();

    const token = user.generateAuthToken();

    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const isPasswordValid = await user.verifyPassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = user.generateAuthToken();

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
};

const logoutController = (req, res) => {
  // You can implement any logout functionality as required.
  res.status(200).json({ message: "Logged out successfully." });
};

module.exports = { registerController, loginController, logoutController };
