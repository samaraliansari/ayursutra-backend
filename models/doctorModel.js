import { Schema, model } from "mongoose";

const DoctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
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
  experienceYears: {
    type: Number,
    default: 0,
  },
  availability: [
    {
      day: { type: String }, // e.g., "Monday"
      startTime: { type: String }, // "09:00"
      endTime: { type: String },   // "17:00"
    },
  ],
  appointments: [
    {
      patientId: { type: Schema.Types.ObjectId, ref: "Patient" },
      date: { type: Date },
      status: { type: String, enum: ["scheduled", "completed", "cancelled"], default: "scheduled" }
    },
  ],
  rating: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  }
});

export default model("Doctor", DoctorSchema);
