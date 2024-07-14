const mongoose = require('mongoose');

const SiswaSchema = new mongoose.Schema({
    nama: { type: String, required: true},
    nis: { type: String, required: true},
    kelas: {type: mongoose.Schema.Types.ObjectId, ref: 'Kelas'}
});

module.exports = mongoose.model('Siswa', SiswaSchema);