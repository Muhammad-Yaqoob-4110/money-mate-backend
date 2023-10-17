const User = require("../../models/authenticationModel/userModel");

// Create a User
async function createUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "User with this email already exists",
      error: error.message,
    });
  }
}

// Get a user by email
async function getUserByEmail(req, res) {
  try {
    const { email } = req.params; // Assuming email is passed as a URL parameter
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found", data: null });
    }

    res.json({ message: "User found", data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
}

module.exports = {
  createUser,
  getUserByEmail,
};
