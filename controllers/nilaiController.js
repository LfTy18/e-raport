const Nilai = require('../models/nilaiModels');
const Absensi = require('../models/absensiModels');

exports.createNilai = async (req, res) => {
    const { siswa, mapel, tugas, ulanganHarian, uts, uas} = req.body;
    try {
        const kehadiranData = await Absensi.find({ siswa }).exec();
        const kehadiranCount = kehadiranData.length;
        const hadirCount = kehadiranData.filter(absensi => absensi.statusKehadiran === 'Hadir').length;
        const nilaiKehadiran = (hadirCount / kehadiranCount) * 100;

        const newNilai = new Nilai({
            siswa,
            mapel,
            tugas,
            ulanganHarian,
            uts,
            uas,
            kehadiran: nilaiKehadiran,
            total: nilaiKehadiran * 0.1 + tugas * 0.2 + ulanganHarian * 0.2 + uts * 0.25 + uas * 0.25
        });

        const nilai = await newNilai.save();
        res.status(201).json(nilai);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllNilai = async (req, res) => {
    try {
        const nilai = await Nilai.find().populate('siswa mapel');
        res.status(200).json(nilai);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getNilaiById = async (req, res) => {
    try {
        const nilai = await Nilai.findById(req.params.id).populate('siswa mapel');
        if (!nilai) {
            return res.status(404).json({ message: 'Nilai tidak ditemukan' });
        }
        res.status(200).json(nilai);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateNilai = async (req, res) => {
    const { siswa, mapel, tugas, ulanganHarian, uts, uas } = req.body;
    try{
        const kehadiranData = await Absensi.find({ siswa }).exec();
        const kehadiranCount = kehadiranData.length;
        const hadirCount = kehadiranData.filter(absensi => absensi.statusKehadiran === 'Hadir').length;
        const nilaiKehadiran = (hadirCount / kehadiranCount) * 100;

        const updatenilai = {
            siswa,
            mapel,
            tugas,
            ulanganHarian,
            uts,
            uas,
            kehadiran: nilaiKehadiran,
            total: nilaiKehadiran * 0.1 + tugas * 0.2 + ulanganHarian * 0.2 + uts * 0.25 + uas * 0.25
        };

        const nilai = await Nilai.findByIdAndUpdate(req.params.id, updateNilai, { new: true });
        if (!nilai) {
            return res.status(404).json({ message: 'Nilai tidak ditemukan' });
        }
        res.status(200).json(nilai);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteNilai = async (req, res) => {
    try {
        const nilai = await Nilai.findByIdAndDelete(req.params.id);
        if (!nilai) {
            return res.status(404).json({ message: 'Nilai tidak ditemukan' });
        }
        res.status(200).json({ message: 'Nilai berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};