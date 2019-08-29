const trafo = require('../models').Trafo;

exports.getLocation = (req, res) => {
    trafo.findAll()
    .then(data => {
        res.send(data.map(function(each) {
            return (({longitude, latitude}) => ({longitude, latitude}))(each)
        }))
    });
}
