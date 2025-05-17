import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Validate input
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // Create new user

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  });

  newUser
    .save()
    .then((user) => {
      res.status(200).json({
        message: "User created successfully",
        data: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error creating user",
        error: err.message,
      });
    });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "User does not exist",
    });
  }
  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }
  // Create JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({
    message: "Login successful",
    token,
    user,
  });
};
