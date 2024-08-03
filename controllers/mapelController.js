const MataPelajaran = require('../models/mapelModels');

// Get all mata pelajaran
exports.getAllMataPelajaran = async (req, res) => {
    try {
        const mataPelajaran = await MataPelajaran.find();
        res.status(200).json(mataPelajaran);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new mata pelajaran
exports.createMataPelajaran = async (req, res) => {
    const mataPelajaran = new MataPelajaran(req.body);
    try {
        const newMataPelajaran = await mataPelajaran.save();
        res.status(201).json(newMataPelajaran);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get mata pelajaran by ID
exports.getMataPelajaranById = async (req, res) => {
    try {
        const mataPelajaran = await MataPelajaran.findById(req.params.id);
        if (!mataPelajaran) return res.status(404).json({ message: 'Mata Pelajaran not found' });
        res.status(200).json(mataPelajaran);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update mata pelajaran
exports.updateMataPelajaran = async (req, res) => {
    try {
        const mataPelajaran = await MataPelajaran.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!mataPelajaran) return res.status(404).json({ message: 'Mata Pelajaran not found' });
        res.status(200).json(mataPelajaran);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete mata pelajaran
exports.deleteMataPelajaran = async (req, res) => {
    try {
        const mataPelajaran = await MataPelajaran.findByIdAndDelete(req.params.id);
        if (!mataPelajaran) return res.status(404).json({ message: 'Mata Pelajaran not found' });
        res.status(200).json({ message: 'Mata Pelajaran deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
