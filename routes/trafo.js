var express = require('express');
var router = express.Router();

router.get('/get_location',
  require("../controller/trafo").getLocation
);

router.post('/update_status', 
require("../controller/trafo").updateTrafoStatus
);

module.exports = router;