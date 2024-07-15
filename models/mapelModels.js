const mongoose = require('mongoose');

const MapelSchema = new mongoose.Schema({
    siswa: { type: mongoose.Schema.Types.ObjectId, ref: 'Siswa' },
    guru: { type: mongoose.Schema.Types.ObjectId, ref: 'Guru'}
});

module.exports = mongoose.model('Mapel', MapelSchema);