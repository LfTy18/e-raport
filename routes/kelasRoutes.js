const express = require('express');
const router = express.Router();
const kelasController = require('../controllers/kelasController');

router.post('/', kelasController.createKelas);
router.get('/', kelasController.getKelas);
router.get('/:id', kelasController.getKelasById);
router.put('/:id', kelasController.updateKelas);
router.delete('/:id', kelasController.deleteKelas);

module.exports = router;