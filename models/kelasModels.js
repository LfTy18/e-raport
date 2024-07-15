const mongoose = require('mongoose');

const KelasSchema = new mongoose.Schema ({
    nama: { type: String, required: true },
    siswa: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Siswa', required: true }]
});

module.exports = mongoose.model('Kelas', KelasSchema);