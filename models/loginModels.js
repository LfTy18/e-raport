const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Login', LoginSchema);
