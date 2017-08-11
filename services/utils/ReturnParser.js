/**
 * Created by changsheng on 11/08/2017.
 */


module.exports = {
    getInvalidReturn: function(returnCode, returnMessage) {
        return {
            code: returnCode,
            success: false,
            msg: returnMessage,
            result: null
        };
    },
    getSuccessReturn: function (returnData, returnMessage) {
        return {
            code: '1001',
            success: true,
            msg: returnMessage,
            result: returnData
        };
    }
};