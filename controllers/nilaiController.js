const Nilai = require('../models/nilaiModels');
const Absensi = require('../models/absensiModels');

exports.createNilai = async (req, res) => {
    const { siswa, mapel, tugas, ulanganHarian, uts, uas } = req;
    try {
        //Menghitung nilai kehadiran dari tabel absensi
        const kehadiranData = await Absensi.find({ siswa }).exec();
        const kehadiranCount = kehadiranData.length;
        const hadirCount = kehadiranData.filter(absensi => absensi.statusKehadiran === 'Hadir').length;
        const nilaiKehadiran = (hadirCount / kehadiranCount) * 100;

        const updateNilai = {
            siswa,
            mapel,
            tugas,
            ulanganHarian,
            uts,
            uas,
            nilaiKehadiran,
            totas: nilaiKehadiran * 0.1 + tugas * 0.2 + ulanganHarian * 0.2 + uts * 0.25 + uas * 0.25
        };

        const nilai = await Nilai.findByIdAndUpdate(req.params.id, updatedNilai, { new: true});
        if (!nilai) {
            return res.status(404).json({ msg: 'Nilai tidak ditemukan'});
        }
        res.status(200).json(nilai);
        } catch (error){
            res.status(500).json({ msg: error.message });
        }
};

        exports.deleteNilai = async (req, res) => {
            try {
                const nilai = await Nilai.findByIdAndDelete(req.params.id);
                if (!nilai) {
                    return res.status(404).json({ msg: 'Nilai tidak ditemukan' });
                }
                res.status(200).json({ msg: 'Nilai dihapus' });
            } catch (error) {
                res.status(500).json({ msg: error.message });
            }
        };
    
