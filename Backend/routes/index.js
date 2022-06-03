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

const port = 3001
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})