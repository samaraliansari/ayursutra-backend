import express from 'express';
import cors from 'cors'; 
import { connect } from 'mongoose'; //db
require('dotenv').config();
import { connectDB } from './db/db.js';
import { json } from 'express'; 

const app = express();
app.use(cors()); // to connect frontend and backend
app.use(express.json()); // to accept json data

// Routes
import userRoutes from "./routes/userRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

app.use("/api/users", userRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/admin", adminRoutes);


//db
connectDB().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.error(err));

//PORT WILL BE FETCHED FROM .ENV
app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
);
