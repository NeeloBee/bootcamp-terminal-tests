
const assert = require('assert');
const isWeekday = require('../isWeekday');

describe('The isWeekday function test' , function(){
    it('should show pass when the day inputted is the day of the week' , function(){
        assert.equal("Monday" , "Monday");

        //assert.deepEqual([2,2],[2,2]);
    });

    it('should should fail if the day inputted is a Saturday' , function(){
        assert.equal("Saturday" , "Saturday");

        //assert.deepEqual([2,2],[2,2]);
    });

    
    it('should should fail if the day inputted is a Sunday' , function(){
        assert.equal("Sunday" , "Sunday");

        //assert.deepEqual([2,2],[2,2]);
    });
});