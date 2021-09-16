
const assert = require('assert');
const countAllFromTown = require('../countAllFromTown');

describe('The countAllFromTown function test' , function(){
    it('should return the registration numbers that are from Stellies' , function(){
        var fromStellies = countAllFromTown('CL 124, CY 567, CL 345, CL 456, CL 341', 'CL');

        assert.equal(5, countAllFromTown(fromStellies, 'CL'));
    });

    it('should return the registration numbers that are from Kuilsriver ', function(){
        var fromKuilsriver = countAllFromTown('CL 124, CY 567, CL 345, CL 456, CL 341','CF');
        assert.equal(0, countAllFromTown(fromKuilsriver, 'CY'));
    });

});