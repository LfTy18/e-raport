const express = require('express');
const router = express.Router();
const mapelController = require('../controllers/mapelController');

// Define routes
router.get('/', mapelController.getAllMataPelajaran);
router.post('/', mapelController.createMataPelajaran);
router.get('/:id', mapelController.getMataPelajaranById);
router.put('/:id', mapelController.updateMataPelajaran);
router.delete('/:id', mapelController.deleteMataPelajaran);

module.exports = router;
