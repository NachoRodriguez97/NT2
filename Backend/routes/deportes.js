const express = require('express');
const router = express.Router();
const controller = require('../controllers/deportes');

//DEPORTES

router.get('/', async(req, res) => {
    res.json(await controller.getDeportes());
})

module.exports = router;