import Doctor from "../models/doctorModel.js";

// Register Doctor
export const registerDoctor = async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.status(201).json({ message: "Doctor registered successfully", doctor: newDoctor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Doctor Login
export const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ email });

    if (!doctor || doctor.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({ message: "Login successful", doctor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// View Doctor Profile
export const getDoctorProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Doctor Profile
export const updateDoctorProfile = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Profile updated", updatedDoctor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// List all doctors
export const listDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
