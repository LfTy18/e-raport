const express = require('express');
const router = express.Router();
const guruController = require('../controllers/guruController');

router.post('/', guruController.createGuru);
router.get('/', guruController.getAllGuru);
router.get('/:id', guruController.getGuruById);
router.put('/:id', guruController.updateGuru);
router.delete('/:id', guruController.deleteGuru);

module.exports = router;