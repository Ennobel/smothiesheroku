var express = require('express');
var router = express.Router();

router.get('/get_location',
  require("../controller/trafo").getLocation
);

module.exports = router;