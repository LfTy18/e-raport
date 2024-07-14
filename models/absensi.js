const mongoose = require('mongoose');

const AbsensiSchema = new mongoose.Schema({
    siswa: { type: mongoose.Schema.Types.ObjectId, ref: 'Siswa' },
    tanggal: { type: Date, required: true},
    statuskehadiran: { type: Boolean, required: true}
});

module.exports = mongoose.model('Absensi', AbsensiSchema);

