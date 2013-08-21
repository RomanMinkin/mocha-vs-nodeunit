"use strict";

var should = require("should");

describe('Test', function() {
    it('should fail', function(done) {

        setTimeout(function(){
            (true).should.be.equal(true);

        }, 300);

        setTimeout(function(){
            (true).should.be.equal(false);

        }, 100);

        done();
    });
});