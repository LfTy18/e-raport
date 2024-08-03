const Kelas = require('../models/kelasModels');

// Get all kelas
exports.getAllKelas = async (req, res) => {
    try {
        const kelas = await Kelas.find().populate('id_guru'); // Populate guru details
        res.status(200).json(kelas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new kelas
exports.createKelas = async (req, res) => {
    const kelas = new Kelas(req.body);
    try {
        const newKelas = await kelas.save();
        res.status(201).json(newKelas);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get kelas by ID
exports.getKelasById = async (req, res) => {
    try {
        const kelas = await Kelas.findById(req.params.id).populate('id_guru');
        if (!kelas) return res.status(404).json({ message: 'Kelas not found' });
        res.status(200).json(kelas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update kelas
exports.updateKelas = async (req, res) => {
    try {
        const kelas = await Kelas.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('id_guru');
        if (!kelas) return res.status(404).json({ message: 'Kelas not found' });
        res.status(200).json(kelas);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete kelas
exports.deleteKelas = async (req, res) => {
    try {
        const kelas = await Kelas.findByIdAndDelete(req.params.id);
        if (!kelas) return res.status(404).json({ message: 'Kelas not found' });
        res.status(200).json({ message: 'Kelas deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
