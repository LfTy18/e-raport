const Siswa = require('../models/siswaModels');

exports.createSiswa = async (req, res) => {
    const { nama, nis, kelas } = req.body;
    try {
        const newSiswa = new Siswa({ nama, nis, kelas });
        const siswa = await newSiswa.save();
        res.status(201).json(siswa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllSiswa = async (req, res) => {
    try {
        const siswa = await Siswa.find().populate('kelas');
        res.status(200).josn(siswa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateSiswa = async (req, res) => {
    const { nama, nis } = req.body;
    try {
        const siswa = await Siswa.findByIdAndUpdate(req.params.id, { nama, nis }, { new: true });
        if (!guru) {
            return res.status(404).json({ message: "Siswa tidak ditemukan" });
        }
        res.status(200).json(siswa);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getSiswaById = async (req, res) => {
    try {
        const siswa = await Siswa.findByIdAndUpdate(req.params.id, { nama, nis, kelas }, { new: true });
        if (!siswa) {
            return res.status(404).json({ error: 'Siswa tidak ditemukan' });
        }
        res.status(200).json(siswa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteSiswa = async (req, res) => {
    try {
        const siswa = await Siswa.findbyIdAndDelete(req.params.id);
        if (!siswa) {
            return res.status(404).json({ error: 'Siswa tidak ditemukan' });
        }
        res.status(200).json({ message: 'Siswa berhasil dihapus' });
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};