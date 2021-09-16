module.exports = function countAllFromTown (registrationNumber, fromTown) {
    var list = registrationNumber.split(",");
    var town = [];
    let counter = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i].trim().startsWith(fromTown)) {
        counter++;
      }
    }

    return counter;
    }

//asserts:
/* var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])

var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ');
assert.deepEqual(fromStellies, ['CJ 456']);


var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
assert.deepEqual(fromKuilsriver, []);*/