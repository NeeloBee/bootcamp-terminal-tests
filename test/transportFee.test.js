
const assert = require('assert');
const transportFee = require('../transportFee');

describe('The transportFee function test' , function(){
    it('should return "R20" when you are working the morning shift' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it('should return "R10" when you are working the afternoon shift' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('should return "free" when you are working the nightshift' , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });

});