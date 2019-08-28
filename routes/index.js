var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',
  require("../controller/index").show
);

module.exports = router;