const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const mongoosee = require('mongoose');

const siswaRoutes = require('./routes/siswaRoutes');
const guruRoutes = require('./routes/guruRoutes');
const mapelRoutes = require('./routes/mapelRoutes');
const kelasRoutes = require('./routes/kelasRoutes');
const nilaiRoutes = require('./routes/nilaiRoutes');
const absensiRoutes = require('./routes/absensiRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

dotenv.config();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());
app.use(express.static('public'));
// Connect to MongoDB
connectDB();

// Define Routes
app.use('/api/siswa', siswaRoutes);
app.use('/api/guru', guruRoutes);
app.use('/api/mapel', mapelRoutes);
app.use('/api/kelas', kelasRoutes);
app.use('/api/nilai', nilaiRoutes);
app.use('/api/absensi', absensiRoutes);
app.use('api/login', loginRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serverstarted on port ${PORT}`));