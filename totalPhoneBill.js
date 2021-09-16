module.exports = function totalPhoneBill(cost) {
var call = [];
  var sms = [];
  const phoneBill = cost.split(", ");
   console.log(phoneBill);
 
  for (var i=0;i<phoneBill.length;i++) {
   var billLogs = phoneBill[i];
  if (billLogs == 'call') {
  call.push(billLogs);
  } else if (billLogs == 'sms') {
   sms.push(billLogs);
  }
} 
   let total = (call.length*2.75) + (sms.length*0.65);
return "R" + total.toFixed(2);
}

//asserts:
/* assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
assert.equal('R3.40', totalPhoneBill('call, sms'));
assert.equal('R1.30', totalPhoneBill('sms, sms'));*/