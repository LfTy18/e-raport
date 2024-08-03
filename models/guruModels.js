const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guruSchema = new Schema({
    nama_guru: { type: String, required: true },
    nip: { type: String, required: true, unique: true },
    tanggal_lahir: { type: Date, required: true },
    alamat: { type: String }
});

const Guru = mongoose.model('Guru', guruSchema);

module.exports = Guru;
