const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kelasSchema = new Schema({
    nama_kelas: { type: String, required: true },
    id_guru: { type: Schema.Types.ObjectId, ref: 'Guru' } // Reference to the Guru collection
});

const Kelas = mongoose.model('Kelas', kelasSchema);

module.exports = Kelas;
