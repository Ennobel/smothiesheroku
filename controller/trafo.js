const trafo = require('../models').Trafo;
const { body } = require('express-validator/check');
const { validationResult } = require('express-validator');

exports.getLocation = (req, res) => {
    trafo.findAll()
    .then(data => {
        res.send(data.map(function(each) {
            return (({longitude, latitude}) => ({longitude, latitude}))(each)
        }))
    });
}

exports.updateTrafoStatus = (req, res) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(403).json(errors);
        } else {
            res.send(req.body);
        }
    } catch(err){
        res.status(404).json(err);
    }
}

exports.validate = (method) => {
    console.log("validatessss");
    switch(method){
        case 'statusValidation' : {
            return [
                body('ir', "IR DOESN'T EXiST").exists(),
                body('is', "IS DOESN'T EXiST").exists()
            ]
        }
    }
}