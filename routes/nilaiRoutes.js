const express = require('express');
const router = express.Router();
const nilaiController = require('../controllers/nilaiController');

// Define routes
router.get('/', nilaiController.getAllNilai);
router.post('/', nilaiController.createNilai);
router.get('/:id', nilaiController.getNilaiById);
router.put('/:id', nilaiController.updateNilai);
router.delete('/:id', nilaiController.deleteNilai);

module.exports = router;
