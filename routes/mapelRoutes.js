const express = require('express');
const router = express.Router();
const mapelController = require('../controllers/mapelController');

router.post('/', mapelController.createMapel);
router.get('/', mapelController.getMapel);
router.get('/:id', mapelController.getMapelById);
router.put('/:id', mapelController.updateMapel);
router.delete('/:id', mapelController.deleteMapel);

module.exports = router;