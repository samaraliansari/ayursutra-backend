const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
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

module.exports = mongoose.model("Admin", AdminSchema);