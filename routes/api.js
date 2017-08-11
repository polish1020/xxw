var express = require('express');
var router = express.Router();

var login = require('../services/api/login');
var getUserInfo = require('../services/api/getUserInfo');

/* GET users listing. */

router.get('/getUserInfo', getUserInfo);

router.get('/login', login);

module.exports = router;
