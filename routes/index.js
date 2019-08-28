var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',
  require("../controller/index").show
);

router.get('/api/v1/Trafo/get_location',
  require("../controller/trafo").getLocation
);

module.exports = router;