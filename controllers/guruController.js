const Guru = require('../models/guruModels');

// Get all guru
exports.getAllGuru = async (req, res) => {
    try {
        const guru = await Guru.find();
        res.status(200).json(guru);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new guru
exports.createGuru = async (req, res) => {
    const guru = new Guru(req.body);
    try {
        const newGuru = await guru.save();
        res.status(201).json(newGuru);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get guru by ID
exports.getGuruById = async (req, res) => {
    try {
        const guru = await Guru.findById(req.params.id);
        if (!guru) return res.status(404).json({ message: 'Guru not found' });
        res.status(200).json(guru);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update guru
exports.updateGuru = async (req, res) => {
    try {
        const guru = await Guru.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!guru) return res.status(404).json({ message: 'Guru not found' });
        res.status(200).json(guru);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete guru
exports.deleteGuru = async (req, res) => {
    try {
        const guru = await Guru.findByIdAndDelete(req.params.id);
        if (!guru) return res.status(404).json({ message: 'Guru not found' });
        res.status(200).json({ message: 'Guru deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
