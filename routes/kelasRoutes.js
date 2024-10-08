const express = require('express');
const router = express.Router();
const kelasController = require('../controllers/kelasController');

// Define routes
router.get('/', kelasController.getAllKelas);
router.post('/', kelasController.createKelas);
router.get('/:id', kelasController.getKelasById);
router.put('/:id', kelasController.updateKelas);
router.delete('/:id', kelasController.deleteKelas);

module.exports = router;
