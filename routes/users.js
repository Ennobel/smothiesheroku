var express = require('express');
var router = express.Router();
const { login, signup } = require("../controller/users");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', signup);

router.post('/login', login);

module.exports = router;