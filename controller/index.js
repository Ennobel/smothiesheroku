const trafo = require('../models').Trafo;

exports.show = (req, res) => {
    trafo.findAll()
    .then(data => {
        res.render('index', {data: JSON.stringify(data)})
    });
}