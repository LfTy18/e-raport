const Absensi = require('../models/absensiModels');

// Get all absensi
exports.getAllAbsensi = async (req, res) => {
    try {
        const absensi = await Absensi.find().populate('id_siswa'); // Populate siswa details
        res.status(200).json(absensi);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new absensi
exports.createAbsensi = async (req, res) => {
    const absensi = new Absensi(req.body);
    try {
        const newAbsensi = await absensi.save();
        res.status(201).json(newAbsensi);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get absensi by ID
exports.getAbsensiById = async (req, res) => {
    try {
        const absensi = await Absensi.findById(req.params.id).populate('id_siswa');
        if (!absensi) return res.status(404).json({ message: 'Absensi not found' });
        res.status(200).json(absensi);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update absensi
exports.updateAbsensi = async (req, res) => {
    try {
        const absensi = await Absensi.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('id_siswa');
        if (!absensi) return res.status(404).json({ message: 'Absensi not found' });
        res.status(200).json(absensi);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete absensi
exports.deleteAbsensi = async (req, res) => {
    try {
        const absensi = await Absensi.findByIdAndDelete(req.params.id);
        if (!absensi) return res.status(404).json({ message: 'Absensi not found' });
        res.status(200).json({ message: 'Absensi deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
