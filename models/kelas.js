const mongoose = require('mongoose');

const KelasSchema = new mongoose.Schema ({
    nama: { type: String, required: true },
    siswa: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Siswa' }]
});

module.exports = mongoose.model('Kelas', KelasShcema);