const Login = require('../models/loginModels');
const Siswa = require('../models/siswaModels');
const Guru = require('../models/guruModels');

exports.login = async (req, res) => {
    const { identifier } = req.body;
    try {
        const siswa = await Siswa.findOne({ nis: identifier });
        if (siswa) {
            return res.status(200).json({ role: 'siswa', id: siswa.nis });
        }

        const guru = await Guru.findOne({ nip: identifier });
        if (guru) {
            return res.status(200).json({ role: 'guru', id: guru.nip });
        }

        return res.status(400).json({ error: 'Invalid NIS or NIP' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
