import User from "../models/userModel.js";
import Doctor from "../models/doctorModel.js";

// Admin Login
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@ayursutra.com" && password === "admin123") {
    res.json({ message: "Admin login successful" });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all doctors
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove a user
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove a doctor
export const deleteDoctor = async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
