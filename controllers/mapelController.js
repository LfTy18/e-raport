const Mapel = require('../models/mapelModels');

exports.createMapel = async (req, res) => {
    const { nama, guru } = req.body;
    try {
        const newMapel = new Mapel({ nama, guru });
        const mapel = await newMapel.save();
        res.status(201).json(mapel);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllMapel = async (req, res) => {
    try {
        const mapel = await Mapel.find().populate('guru');
        res.status(200).json(mapel);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getMapelById = async (req, res) => {
    try {
        const mapel = await Mapel.findById(req.params.id).populate('guru');
        if (!mapel) {
            return res.status(404).json({ error: 'Mapel tidak ditemukan' });
        }
        res.status(200).json(mapel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateMapel = async (req, res) => {
    const { nama, guru } = req.body;
    try {
        const mapel = await Mapel.findByIdAndUpdate(req.params.id, { nama, guru }, { new: true});
        if (!mapel) {
            return res.status(404).json({ error: 'Mapel tidak ditemukan' });
        }
        res.status(200).json(mapel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteMapel = async (req, res) => {
    try {
        const mapel = await Mapel.findByIdAndDelete(req.params.id);
        if (!mapel) {
            return res.status(404).json({ error: 'Mapel tidak ditemukan' });
        }
        res.status(200).json({ message: 'Mapel berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}