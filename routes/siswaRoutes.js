const express = require('express');
const router = express.Router();
const siswaController = require('../controllers/siswaController');

// Define routes
router.get('/', siswaController.getAllSiswa);
router.post('/', siswaController.createSiswa);
router.get('/:id', siswaController.getSiswaById);
router.put('/:id', siswaController.updateSiswa);
router.delete('/:id', siswaController.deleteSiswa);

module.exports = router;
