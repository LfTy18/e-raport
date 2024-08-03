const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const absensiSchema = new Schema({
    id_siswa: { type: Schema.Types.ObjectId, ref: 'Siswa', required: true }, // Reference to the Siswa collection
    tanggal: { type: Date, required: true },
    status: {
        type: String,
        enum: ['Hadir', 'Sakit', 'Izin', 'Alpha'],
        required: true
    }
});

const Absensi = mongoose.model('Absensi', absensiSchema);

module.exports = Absensi;
