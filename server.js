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
import authRoutes from './routes/authRoutes';
app.use('/api/auth', authRoutes);


//db
connectDB().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.error(err));

//PORT WILL BE FETCHED FROM .ENV
app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
);
