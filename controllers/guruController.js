const Guru = require('../models/guruModels');

exports.createGuru = async (req, res) => {
    const { nama, nip } = req.body;
    try {
        const newGuru = new Guru({ nama, nip });
        const guru = await newGuru.save();
        res.status(201).json(guru);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllGuru = async (req, res) => {
    try {
        const guru = await Guru.find();
        res.status(200).json(guru);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getGuruById = async (req, res) => {
    try {
        const guru = await Guru.findById(req.params.id);
        if (!guru) {
            return res.status(404).json({ message: "Guru tidak ditemukan" });
        }
        res.status(200).json(guru);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateGuru = async (req, res) => {
    const { nama, nip } = req.body;
    try {
        const guru = await Guru.findByIdAndUpdate(req.params.id, { nama, nip }, { new: true });
        if (!guru) {
            return res.status(404).json({ message: "Guru tidak ditemukan" });
        }
        res.status(200).json(guru);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteGuru = async (req, res) => {
    try {
        const guru = await Guru.findByIdAndDelete(req.params.id);
        if (!guru) {
            return res.status(404).json({ message: "Guru tidak ditemukan" });
        }
        res.status(200).json({ msg: 'Guru telah dihapus' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};