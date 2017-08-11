/**
 * Created by changsheng on 11/08/2017.
 */

var ReturnParser = require('../utils/ReturnParser');

module.exports = function (req, res, next) {
    var query = req.query;
    var name = query.name;

    if (!name) {
        res.send(ReturnParser.getInvalidReturn('4004', '用户名不能为空'));
        return;
    }

    req.session.user = {
        name: name
    };
    res.cookie('__xxw', 'xxw');
    res.send(ReturnParser.getSuccessReturn({
        userInfo: req.session.user
    }))

};