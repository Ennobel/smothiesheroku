var express = require('express');
var router = express.Router();
const { check } = require('express-validator');
const apiValidation = require('../utils/apivalidation');

router.get('/get_location',
  require("../controller/trafo").getLocation
);

router.post('/update_status', apiValidation, [ 
  check('Ir').not().isEmpty(), check('Is').not().isEmpty(),
  check('It').not().isEmpty(), check('Ir').not().isEmpty(),
  check('Vr').not().isEmpty(), check('Vs').not().isEmpty(),
  check('Vt').not().isEmpty(), check('f').not().isEmpty(),
  check('PF').not().isEmpty(), check('KWH').not().isEmpty(),
  check('KVAR').not().isEmpty(), check('THDI').not().isEmpty(),
  check('THDV').not().isEmpty()
], 
require("../controller/trafo").updateTrafoStatus
);


module.exports = router;