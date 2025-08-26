import express from "express";
import { 
  registerUser, 
  loginUser, 
  getUserProfile, 
  updateUserProfile,
  bookAppointment,
  getAppointments,
  cancelAppointment,
  uploadMedicalRecords,
  getMedicalRecords
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// 🔹 Auth
router.post("/register", registerUser);   // Create new user account
router.post("/login", loginUser);         // Login & get token

// 🔹 Profile
router.get("/profile", protect, getUserProfile);     // Get logged-in user profile
router.put("/profile", protect, updateUserProfile);  // Update user profile

// 🔹 Appointments
router.post("/appointments", protect, bookAppointment);         // Book doctor appointment
router.get("/appointments", protect, getAppointments);          // View all user appointments
router.delete("/appointments/:id", protect, cancelAppointment); // Cancel appointment

// 🔹 Medical Records
router.post("/records", protect, uploadMedicalRecords); // Upload medical files / prescriptions
router.get("/records", protect, getMedicalRecords);     // View user’s medical records

export default router;
