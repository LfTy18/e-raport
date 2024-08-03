const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mataPelajaranSchema = new Schema({
    nama_pelajaran: { type: String, required: true }
});

const MataPelajaran = mongoose.model('MataPelajaran', mataPelajaranSchema);

module.exports = MataPelajaran;
