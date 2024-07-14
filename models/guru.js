const mongoose = require('mongoose');

const GuruSchema = new mongoose.Schema ({
    nama: { type: String, required: true},
    nip: { type: String, required: true, unique: true}
});

module.exports = mongoose.model('Guru', GuruSchema);