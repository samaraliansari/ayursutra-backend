import express from "express";
import { registerDoctor, loginDoctor, getDoctorProfile, updateDoctorProfile, listDoctors } from "../controllers/doctorController.js";

const router = express.Router();

router.post("/register", registerDoctor);
router.post("/login", loginDoctor);
router.get("/profile/:id", getDoctorProfile);
router.put("/profile/:id", updateDoctorProfile);
router.get("/all", listDoctors);

export default router;
