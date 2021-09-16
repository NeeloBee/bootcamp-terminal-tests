
const assert = require('assert');
const fromWhere = require('../fromWhere');

describe('The fromWhere function test' , function(){
    it('should return "Bellville" if the registration number has a "CY" in it' , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });

    it('should return "Paarl" if the registration number has a "CJ" in it' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });

    it('should return "Cape Town" if the registration number has a "CA" in it' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });

    it('should return "Some other place!" if the registration number is not from any of the above places' , function(){
    assert.equal(fromWhere('CC'), 'Some other place!');
    });
});