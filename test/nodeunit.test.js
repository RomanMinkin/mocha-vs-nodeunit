"use strict";

exports.Test = {
    "should fail": function (test) {
        test.expect(2);

        setTimeout(function(){
            test.equal(true, true);

        }, 300);

        setTimeout(function(){
            test.equal(true, false);
        }, 100);

        test.done();
    }
}