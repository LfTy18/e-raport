const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    nis: {
        type: String,
        unique: true,
        sparse: true
    },
    nip: {
        type: String,
        unique: true,
        sparse: true
    }
});

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;
