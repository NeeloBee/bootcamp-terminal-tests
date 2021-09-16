
const assert = require('assert');
const regCheck = require('../regCheck');

describe('The regCheck function test' , function(){
    it('should return true if a registration number is GP' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('should return true if a registration number is L' , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });

    it('should return true if a registration number is EC' , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

    it('should return true if a registration number is MP' , function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });

});