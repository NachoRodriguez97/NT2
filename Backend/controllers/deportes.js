const deportes = require('../data/deportes');
const { all } = require('../routes/deportes');

async function getDeportes() {
    return deportes.getAllDeportes();
}

module.exports = {getDeportes};