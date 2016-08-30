'use strict';

var expect = require('chai').expect;

var util = require('../index');

describe('#utilFunctions', function(){
    it('should add two numbers', function () {
        var result = util.curryAdd(3)(4);
        expect(result).equal(7);
    });

    it('should add correctly', function () {
        var result = util.curryAdd(2)(1);
        expect(result).not.equal(0);
    })
});