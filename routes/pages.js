var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: '这是我们的小窝',
        desc: '亲爱的徐小薇'
    });
});

module.exports = router;
