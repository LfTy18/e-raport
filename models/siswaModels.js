const mongoose = require('mongoose');

const SiswaSchema = new mongoose.Schema({
    no: {type: Number, required: true},
    nama: { type: String, required: true },
    nis: { type: String, required: true },
    kelasId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Kelas', required: true }]
});

const Siswa = mongoose.model('Siswa', SiswaSchema);
module.exports = Siswa;