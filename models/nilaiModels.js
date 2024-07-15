const mongoose = require('mongoose');

const NilaiSchema = new mongoose.Schema({
    siswa: { type: mongoose.Schema.Types.ObjectId, ref: 'Siswa' },
    mapel: { type: mongoose.Schema.Types.ObjectId, ref: 'Mapel' },
    kehadiran: Number,
    tugas: Number,
    ulanganHarian: Number,
    uts: Number,
    uas: Number,
    totalNilai: Number
});

module.exports = mongoose.model('Nilai', NilaiSchema);