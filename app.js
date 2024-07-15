require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const siswaRoutes = require('./routes/siswaRoutes');
const guruRoutes = require('./routes/Guru');
const mapelRoutes = require('./routes/Mapel');
const kelasRoutes = require('./routes/Kelas');
const nilaiRoutes = require('./routes/nilaiRoutes');
const absensiRoutes = require('./routes/Absensi');

const app = express();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Connect to MongoDB
connectDB();

// Define Routes
app.use('/api/siswa', siswaRoutes);
app.use('/api/guru', guruRoutes);
app.use('/api/mapel', mapelRoutes);
app.use('/api/kelas', kelasRoutes);
app.use('/api/nilai', nilaiRoutes);
app.use('/api/absensi', absensiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serverstarted on port ${PORT}`));