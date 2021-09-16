module.exports = function isFromBellville (registrationNumber, locator) {
    return registrationNumber.startsWith(locator);
}

// asserts:
/* var fromPaarl = isFrom('CJ 98912', 'CJ'); //returns true

var fromBellville = isFrom('CJ 98912', 'CY'); //returns false

assert.equal(fromPaarl, true, 'Should be from Paarl');
assert.equal(fromBellville, false, 'Should be from Bellville - starting with CY');*/