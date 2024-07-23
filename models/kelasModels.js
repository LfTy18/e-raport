const mongoose = require('mongoose');

const KelasSchema = new mongoose.Schema ({
    namaKelas: { type: String, required: true },
    
});

module.exports = mongoose.model('Kelas', KelasSchema);