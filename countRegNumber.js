module.exports = function countRegNumber(regCount) {
    return regCount.split(',').length;
  }

  //asserts:

  /* var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
assert.equal(regCount, 3);

var regCount = countRegNumber('CA 182736')
assert.equal(regCount, 1); */