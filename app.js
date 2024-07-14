const express = require('express');
const connectDB = require('.config/db');
const siswaRoutes = require('./routes/Siswa');

const app = express();

// Connect to MongoDB
connectDB();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Define Routes
app.use('/api/siswa', siswaRoutes)