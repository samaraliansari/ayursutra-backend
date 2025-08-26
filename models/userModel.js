import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["patient", "doctor", "admin"],
    default: "patient",
  },

  age: { type: Number },
  gender: { type: String, enum: ["male", "female", "other"] },
  medicalHistory: [String],
  currentMedications: [String],

  specialization: { type: String },
  experienceYears: { type: Number, default: 0 },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default model("User", UserSchema);
