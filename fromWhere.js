module.exports = function fromWhere(regNo) {
        switch(regNo) {
          case "CY":
            return "Bellville";
          case "CJ": 
            return "Paarl";
          case "CA":
            return "Cape Town";
          default:
            return "Some other place!";
                    }
      }
//asserts:

/* assert.equal(fromWhere('CY'), 'Bellville');
assert.equal(fromWhere('CJ'), 'Paarl');
assert.equal(fromWhere('CA'), 'Cape Town');
assert.equal(fromWhere('CC'), 'Some other place!'); */

