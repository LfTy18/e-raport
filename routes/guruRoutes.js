const express = require('express');
const router = express.Router();
const guruController = require('../controllers/guruController');

// Define routes
router.get('/', guruController.getAllGuru);
router.post('/', guruController.createGuru);
router.get('/:id', guruController.getGuruById);
router.put('/:id', guruController.updateGuru);
router.delete('/:id', guruController.deleteGuru);

module.exports = router;
