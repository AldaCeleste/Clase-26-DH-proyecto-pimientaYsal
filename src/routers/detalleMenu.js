const express = require('express');
const router = express.Router();
const detalleMenuController = require('../controllers/detalleMenuController')

router.get('/:idMenu', detalleMenuController.index);


module.exports= router;