
const assert = require('assert');
const isFromBellville = require('../isFromBellvile');

describe('The isFromBellville function test' , function(){
    it('should show you that a number plate is from Bellville when it starts with "CY"' , function(){
        assert.equal("CY 98912" , "CY 98912");
    });

    it('should show that a number plate is from Belleville when it only has the "CY" words in' , function(){
        assert.equal("CY" , "CY");
    });

    it('should fail when the number plate does not contain "CY"' , function(){
    assert.equal(isFrom("CJ 98912") , false);
    })
});