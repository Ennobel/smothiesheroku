var express = require('express');
var router = express.Router();
var apiAuth = require('../utils/apivalidation');

router.get('/get_location',
  require("../controller/trafo").getLocation
);

router.post('/update_status', apiAuth, require("../controller/trafo").validate('statusValidation'), 
  require("../controller/trafo").updateTrafoStatus
);

module.exports = router;