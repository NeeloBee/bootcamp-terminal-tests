
const assert = require('assert');
const countRegNumber = require('../countRegNumber');


describe('The countRegNumber function test' , function(){
    it('should return the number of registration number in the string, which is 3' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });

    it('should return the number of registration number in the string, which is 1', function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });

});