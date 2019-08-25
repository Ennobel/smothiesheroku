const trafo = require('../models').Trafo;
const petugas = require('../models').Petugas;
var dataTrafo;
var dataPetugas;


exports.show = (req, res) => {
    trafo.findAll()
    .then(data => {
        dataTrafo = data;
    });
    petugas.findAll()
    .then(data => {
        dataPetugas = data;
    })
    
    res.render('index', {
        dataTrafo: JSON.stringify(dataTrafo),
        dataPetugas: JSON.stringify(dataPetugas)
    });
    console.log(dataTrafo);
}