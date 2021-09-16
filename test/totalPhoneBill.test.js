
const assert = require('assert');
const totalPhoneBill = require('../totalPhoneBill');

describe('The totalPhoneBill function test' , function(){
    it('should return "R7.45" for 2calls & 2SMSes' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('should return "R3.40" for 1 call & 1SMS' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it('should return "R1.30" for 2SMSes' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});