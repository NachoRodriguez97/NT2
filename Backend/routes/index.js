import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const router = express();
router.use(bodyParser.json());
router.use(cors());



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Taller de Programación' });
});

//DEPORTES
const listaDeportes = [{nombre: "Futbol"},{nombre: "Tenis"}, {nombre: "Handball"}, {nombre: "Basquet"}, {nombre: "Volley"}];

router.get('/api/listaDeportes', (req, res) => {
    res.json(listaDeportes);
})

router.post('/api/deporte', (req, res) => {
    listaDeportes.push(req.body);
    res.json(req.body);
})

router.delete('/api/deporte/:nombre', (req, res) => {
    console.log(req.params.nombre);
    res.json({ ope: "ok" });
})

router.put('/api/deporte/:nombre', (req, res) => {
    listaDeportes.push(req.body);
    res.json({ope:"ok"});
})

//USUARIOS

const lista = [{ mail: "mateo.amarillo50@gmail.com", Nombre: "Mateo", Apellido: "Amarillo" },
{ mail: "nacho.rodriguez@gmail.com", Nombre: "Ignacio", Apellido: "Rodriguez" }];

const usuario = { email : 'usuario@test.com', password : '123456'  };

router.post('/api/login', (req, res) => {
    if( req.body && req.body.email === usuario.email && req.body.password == usuario.password) {
      res.json(req.body);
    } else {
      res.sendStatus(400);
    }
})

router.get('/api/lista', (req, res) => {
    res.json(lista);
})

router.post('/api/usuario', (req, res) => {
    lista.push(req.body);
    res.json(req.body);
})

router.delete('/api/usuario/:mail', (req, res) => {
    console.log(req.params.mail);
    res.json({ ope: "ok" });
})


//CLASES

const listaClases = [{deporte: "Futbol", dia:"Lunes", hora: "19:00"},{deporte: "Natacion", dia:"Miercoles", hora: "20:00"}];

router.get('/api/listaClases', (req, res) => {
    res.json(listaClases);
})

router.post('/api/horario', (req, res) => {
    listaClases.push(req.body);
    res.json(req.body);
})

router.delete('/api/horario/:nombre', (req, res) => {
    console.log(req.params.nombre);
    res.json({ ope: "ok" });
})


//PROFESORES
const listaProfesores = [{ mail: "ricardoProfe@gmail.com", Nombre: "Ricardo", Apellido: "Ruiz" },
{ mail: "luisProfe@gmail.com", Nombre: "Luis", Apellido: "Gonzalez" }];

const profesor = { email : 'profesor@test.com', password : '123456'  };

router.post('/api/login', (req, res) => {
    if( req.body && req.body.email === profesor.email && req.body.password == profesor.password) {
      res.json(req.body);
    } else {
      res.sendStatus(400);
    }
})

router.get('/api/listaProfesores', (req, res) => {
    res.json(listaProfesores);
})

router.post('/api/profesor', (req, res) => {
    listaProfesores.push(req.body);
    res.json(req.body);
})

router.delete('/api/profesor/:mail', (req, res) => {
    console.log(req.params.mail);
    res.json({ ope: "ok" });
})

//RESERVAS
const listaReservas = [{deporte: "Futbol", dia:"Martes", hora: "19:00"},{deporte: "Handball", dia:"Sabado", hora: "10:00"}];

router.get('/api/reservas', (req, res) => {
    res.json(listaReservas);
})

router.delete('/api/reservas/:nombre', (req, res) => {
    console.log(req.params.nombre);
    res.json({ ope: "ok" });
})

const port = 3001
router.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

