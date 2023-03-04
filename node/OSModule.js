const os = require('os');
// os module helps js to interact with
var totalmem=os.totalmem();
var availablemem=os.freemem();
console.log('t_m '+totalmem);
console.log(`f_m  ${availablemem}`);

