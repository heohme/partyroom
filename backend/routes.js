const express = require('express');
const router = express.Router();
const roleController = require('./controllers/roleController');

router.get('/roles', roleController.getRoles);
router.get('/roles/:id', roleController.getRoleById);
router.post('/roles', roleController.createRole);

module.exports = router;