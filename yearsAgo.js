module.exports = function yearsAgo(jaar) {
const year = new Date()
  return year.getFullYear()-jaar;
}

//asserts:
/* assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));*/