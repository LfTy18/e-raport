const Absensi = require('../models/absensiModels');

exports.createAbsensi = async (req, res) => {
    const { sisw, tanggal, statusKehadiran } = req.body;
    try {
        const newAbsensi = new Absensi({ siswa, tanggal, statusKehadiran});
        const absensi = await newAbsensi.save();
        res.status(201).json( absensi );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllAbsensi = async (req, res) => {
    try {
        const absensi = await Absensi.find().populate('siswa');
        res.status(200).json( absensi );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAbsensiById = async (req, res) => {
    try {
        const absensi = await Absensi.findById(req.params.id).populate('siswa');
        if (!absensi) {
            return res.status(404).json({ message: 'Absensi tidak ditemukan' });
        }
        res.status(200).json( absensi );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateAbsensi = async (req, res) => {
    const { siswa, tanggal, statusKehadiran } = req.body;
    try {
        const absensi = await Absensi.findByIdAndUpdate(req.params.id, { siswa, tanggal, statusKehadiran }, { new: true });
        if (!absensi) {
            return res.status(404).json({ msg: 'Absensi not found' });
        }
        res.status(200).json(absensi);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteAbsensi = async (req, res) => {
    try {
        const absensi = await Absensi.findByIdAndDelete(req.params.id);
        if (!absensi) {
            return res.status(404).json({ message: 'Absensi tidak ditemukan' });
        }
        res.status(200).json({ msg: 'Absensi telah dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};