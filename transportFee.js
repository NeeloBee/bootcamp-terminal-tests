module.exports = function transportFee(cost) {
    if (cost == "morning") {
      return "R20";
    } else if (cost == "afternoon") {
      return "R10";
    } else if (cost == "nightshift") {
      return "free";
    } 
  
}

//asserts:

/* assert.equal(transportFee('morning'), 'R20');

assert.equal(transportFee('afternoon'), 'R10');

assert.equal(transportFee('nightshift'), 'free', 'for night shift return free'); */
