const path =require('path');
// gives information about files by conveting that info in string
var pathObj=path.parse(__filename);
console.log(pathObj);