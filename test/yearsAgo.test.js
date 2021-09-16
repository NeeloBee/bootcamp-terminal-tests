
const assert = require('assert');
const yearsAgo = require('../yearsAgo');

describe('The yearsAgo function test' , function(){
    it('should return that 1976 is 45 years ago' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });

    it('should show you that 2000 is 21 years ago' , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});