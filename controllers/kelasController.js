const Kelas = require('../models/kelasModels');

exports.createKelas = async (req, res) => {
    const { namaKelas } = req.body;
    try {
        const newKelas = new Kelas({ namaKelas });
        const kelas = await newKelas.save();
        res.status(201).json({ kelas });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllKelas = async (req, res) => {
    try {
        const kelas = await Kelas.find();
        res.status(200).json(kelas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getKelasById = async (req, res) => {
    try {
        const kelas = await Kelas.findById(req.params.id).populate('');
        if (!kelas) {
            return res.status(404).json({ error: 'Kelas tidak ditemukan' });
        }
        res.status(200).json(kelas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateKelas = async (req, res) => {
    const { namaKelas } = req.body;
    try {
        const kelas = await Kelas.findByIdAndUpdate(req.params.id, { namaKelas }, { new: true});
        if (!kelas) {
            return res.status(404).json({ error: 'Kelas tidak ditemukan' });
        }
        res.status(200).json(kelas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteKelas = async (req, res) => {
    try {
        const kelas = await Kelas.findByIdAndDelete(req.params.id);
        if (!kelas) {
            return res.status(404).json({ error: 'Kelas tidak ditemukan' });
        }
        res.status(200).json({ message: 'Kelas berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};