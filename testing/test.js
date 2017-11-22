// appends a file to a route
// first param is the filename where to append it to
// second param is the file we are appending
// to the one specified in the first param

// async without call back function
// fs.appendFile('greetings.txt', 'hello world');

// sync call
// fs.appendFileSync('greetings.txt', 'hello world');


// var user = os.userInfo();

// async with call back function
// fs.appendFile('greetings.txt', `hello world, ${user.username}. You are aged: ${notes.age}`, function(err){
//   if(err){
//      console.log('Unable to write file')
//
// }
// });



console.log('starting app');

const req  = require('request');

req({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1265%20Rosewood',
  json: true
}, (err, res, body) => {
  // console.log(JSON.stringify(res, null, 4)) //second argument filters out properties
  // body = JSON.parse(body)
  console.log(body.results[0].geometry.location)
})




setTimeout(() => {
  console.log('inside call back')
}, 3000);

setTimeout(() => {
  console.log('inside call back too')
});

console.log('finishing up')
