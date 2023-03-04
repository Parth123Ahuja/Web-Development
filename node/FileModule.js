const fs=require('fs');
// we have file module to work with files
// all the file function comes in a pair
// of synchronous and asynchronous  always use
// asynchronous
const files = fs.readdirSync('./')
console.log(files);
fs.readdir('$', function (err,files){
    if(err) console.log('error',err);
    else console.log('result',files);

});