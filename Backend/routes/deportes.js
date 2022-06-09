const express = require('express');
const router = express.Router();
const controller = require('../controllers/deportes');

//DEPORTES

app.get('/', async(req, res) => {
    res.json(await controller.getDeportes());
})

app.post('/api/deporte', (req, res) => {
    listaDeportes.push(req.body);
    res.json(req.body);
})

app.delete('/api/deporte/:nombre', (req, res) => {
    console.log(req.params.nombre);
    res.json({ ope: "ok" });
})

app.put('/api/deporte/:nombre', (req, res) => {
    listaDeportes.push(req.body);
    res.json({ope:"ok"});
})