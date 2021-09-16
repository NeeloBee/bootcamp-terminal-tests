
const assert = require('assert');
const countAllPaarl = require('../countAllPaarl');



describe('The countAllFromPaarl function test' , function(){
    it('should return the registration numbers that are from Paarl' , function(){
        var fromPaarl = ('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123');
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });

    it('should return the registration numbers that are from Paarl' , function(){
        var fromPaarl = ('CJ 345 123, CK 345, CJ 123');
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });

});