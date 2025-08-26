import express from "express";
import { loginAdmin, getAllUsers, getAllDoctors, deleteUser, deleteDoctor } from "../controllers/adminController.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/users", getAllUsers);
router.get("/doctors", getAllDoctors);
router.delete("/user/:id", deleteUser);
router.delete("/doctor/:id", deleteDoctor);

export default router;
