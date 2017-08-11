/**
 * Created by changsheng on 11/08/2017.
 */

var ReturnParser = require('../utils/ReturnParser');

module.exports = function (req, res, next) {
    res.send(ReturnParser.getSuccessReturn({
        userInfo: req.session.user
    }));
};
