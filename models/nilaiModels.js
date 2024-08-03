const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nilaiSchema = new Schema({
    id_siswa: { type: Schema.Types.ObjectId, ref: 'Siswa', required: true }, // Reference to the Siswa collection
    id_mata_pelajaran: { type: Schema.Types.ObjectId, ref: 'MataPelajaran', required: true }, // Reference to the MataPelajaran collection
    absensi: { type: Number, required: true },
    tugas: { type: Number, required: true },
    ulangan_harian: { type: Number, required: true },
    uts: { type: Number, required: true },
    uas: { type: Number, required: true }
});

const Nilai = mongoose.model('Nilai', nilaiSchema);

module.exports = Nilai;
