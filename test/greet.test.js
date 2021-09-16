
const assert = require('assert');
const greet = require('../greet');


describe('The greet function test' , function(){
    it('should return "Hello,Lindani" when I greet Lindani' , function(){
        assert.equal("Hello, Lindani", greet('Lindani'));

    });

    it('should return "Hello,Thatoentle" when I greet Thatoentle' , function(){
        assert.equal("Hello, Thatoentle", greet('Thatoentle'));
    });

    it('should just return "Hello" when no name is entered' , function(){
        assert.equal("Hello", greet(""));
    });

    it('should return Hello, and the name I input Lerato' , function() {
        assert.equal("Hello, Lerato", greet("Lerato"));

    });

    it('should greet the person I am referring to' , function() {
        assert.equal("Hello, Thatoentle", greet("Thatoentle"));
    });

});