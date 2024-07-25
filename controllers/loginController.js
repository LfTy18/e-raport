const Siswa = require('../models/siswaModels');
const Guru = require('../models/guruModels');

exports.login = async (req, res) => {
    const { id } = req.body;

    try {
        const siswa = await Siswa.findOne({ nis: id });
        if (siswa) {
            return res.status(200).json({ role: 'siswa' });
        }

        const guru = await Guru.findOne({ nip: id });
        if (guru) {
            return res.status(200).json({ role: 'guru' });
        }

        return res.status(401).json({ message: 'Invalid NIS/NIP' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
