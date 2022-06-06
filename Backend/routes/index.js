import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()
app.use(bodyParser.json());
app.use(cors());

const lista = [{ mail: "mateo.amarillo50@gmail.com", Nombre: "Mateo", Apellido: "Amarillo" },
{ mail: "nacho.rodriguez@gmail.com", Nombre: "Ignacio", Apellido: "Rodriguez" }];

const usuario = { email : 'usuario@test.com', password : '123456'  };

app.post('/api/login', (req, res) => {
    if( req.body && req.body.email === usuario.email && req.body.password == usuario.password) {
      res.json(req.body);
    } else {
      res.sendStatus(400);
    }
  })

app.get('/api/lista', (req, res) => {
    res.json(lista);
})

app.post('/api/usuario', (req, res) => {
    lista.push(req.body);
    res.json(req.body);
})

app.delete('/api/usuario/:mail', (req, res) => {
    console.log(req.params.mail);
    res.json({ ope: "ok" });
})


const listaDeportes = [{nombre: "Futbol"},{nombre: "Tenis"}];

app.get('/api/listaDeportes', (req, res) => {
    res.json(listaDeportes);
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

const listaClases = [{deporte: "Futbol", dia:"Lunes", hora: "19:00"},{deporte: "Natacion", dia:"Miercoles", hora: "20:00"}];

app.get('/api/listaClases', (req, res) => {
    res.json(listaClases);
})

app.post('/api/horario', (req, res) => {
    listaClases.push(req.body);
    res.json(req.body);
})

app.delete('/api/horario/:nombre', (req, res) => {
    console.log(req.params.nombre);
    res.json({ ope: "ok" });
})

const port = 3001
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})