const path = require('path');

// console.log(path.join())
const a = path.basename('C:\\temp\\myfile.html');
const d = path.dirname ('C:\\temp\\myfile.html');
console.log(a)
console.log(d)
const c = path.extname(__filename)
console.log(__filename, c)