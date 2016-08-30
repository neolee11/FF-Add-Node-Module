(function (util) {

    'use strict';

    util.curryAdd = function (a) {
        return function(b){
            return a + b;
        }
    };

    return util;
})(module.exports);