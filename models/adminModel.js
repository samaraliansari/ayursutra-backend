import { Schema, model } from "mongoose";

const AdminSchema = new Schema({
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
    enum: ["superadmin", "centeradmin"],
    default: "centeradmin",
  },

  permissions: {
    manageUsers: { type: Boolean, default: true },
    manageDoctors: { type: Boolean, default: true },
    manageTherapies: { type: Boolean, default: true },
    viewAnalytics: { type: Boolean, default: false },
    systemSettings: { type: Boolean, default: false },
  },

  assignedCenter: {
    type: Schema.Types.ObjectId,
    ref: "Center",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default model("Admin", AdminSchema);