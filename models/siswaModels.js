const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const siswaSchema = new Schema({
    nama_siswa: { type: String, required: true },
    nis: { type: String, required: true, unique: true },
    tanggal_lahir: { type: Date, required: true },
    alamat: { type: String },
    id_kelas: { type: Schema.Types.ObjectId, ref: 'Kelas' } // Assuming 'Kelas' is another collection
});

const Siswa = mongoose.model('Siswa', siswaSchema);

module.exports = Siswa;
