const trafo = require('../models').Trafo;
const { validationResult } = require('express-validator');

exports.getLocation = (req, res) => {
    trafo.findAll()
    .then(data => {
        res.send(data.map(function(each) {
            return (({longitude, latitude}) => ({longitude, latitude}))(each)
        }))
    });
}

    exports.updateTrafoStatus =  (req, res) => {
            const erors = validationResult(req);
            if(!erors.isEmpty()){
                return res.status(400).json({erors: erors.array()})
            }
            res.send(req.body);
    }
