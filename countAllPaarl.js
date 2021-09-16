module.exports = function countAllPaarl (fromTown) {
    var list = fromTown.split(',');
    let counter = 0;
    var fromTown = [];
    for (var i = 0; i < list.length; i++) {
      
      if (list[i].includes('CJ') === true) {
        counter++;
        fromTown.push(list[i].trim());
      }
    }
    
    return counter;  
  }

  //asserts:

  /* assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123')); */