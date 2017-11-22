const req = require('request');
 const fs = require('fs');

req({
  url: 'https://www.etsy.com/',
  json: true
}).pipe(fs.createWriteStream('write.js'));
