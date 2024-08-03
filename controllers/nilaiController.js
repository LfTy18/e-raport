const Nilai = require('../models/nilaiModels');

// Get all nilai
exports.getAllNilai = async (req, res) => {
    try {
        const nilai = await Nilai.find().populate('id_siswa').populate('id_mata_pelajaran'); // Populate siswa and mata_pelajaran details
        res.status(200).json(nilai);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new nilai
exports.createNilai = async (req, res) => {
    const nilai = new Nilai(req.body);
    try {
        const newNilai = await nilai.save();
        res.status(201).json(newNilai);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get nilai by ID
exports.getNilaiById = async (req, res) => {
    try {
        const nilai = await Nilai.findById(req.params.id).populate('id_siswa').populate('id_mata_pelajaran');
        if (!nilai) return res.status(404).json({ message: 'Nilai not found' });
        res.status(200).json(nilai);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update nilai
exports.updateNilai = async (req, res) => {
    try {
        const nilai = await Nilai.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('id_siswa').populate('id_mata_pelajaran');
        if (!nilai) return res.status(404).json({ message: 'Nilai not found' });
        res.status(200).json(nilai);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete nilai
exports.deleteNilai = async (req, res) => {
    try {
        const nilai = await Nilai.findByIdAndDelete(req.params.id);
        if (!nilai) return res.status(404).json({ message: 'Nilai not found' });
        res.status(200).json({ message: 'Nilai deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
