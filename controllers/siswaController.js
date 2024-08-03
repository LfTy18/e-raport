const Siswa = require('../models/siswaModels');

// Get all siswa
exports.getAllSiswa = async (req, res) => {
    try {
        const siswa = await Siswa.find();
        res.status(200).json(siswa);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new siswa
exports.createSiswa = async (req, res) => {
    const siswa = new Siswa(req.body);
    try {
        const newSiswa = await siswa.save();
        res.status(201).json(newSiswa);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get siswa by ID
exports.getSiswaById = async (req, res) => {
    try {
        const siswa = await Siswa.findById(req.params.id);
        if (!siswa) return res.status(404).json({ message: 'Siswa not found' });
        res.status(200).json(siswa);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update siswa
exports.updateSiswa = async (req, res) => {
    try {
        const siswa = await Siswa.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!siswa) return res.status(404).json({ message: 'Siswa not found' });
        res.status(200).json(siswa);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete siswa
exports.deleteSiswa = async (req, res) => {
    try {
        const siswa = await Siswa.findByIdAndDelete(req.params.id);
        if (!siswa) return res.status(404).json({ message: 'Siswa not found' });
        res.status(200).json({ message: 'Siswa deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
