console.log('starting app');

const req  = require('request');

// stores the terminal inputs as an object --address '124'  = address: 124
const yargs  = require('yargs');

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')



// offers terminal help and options
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch data',
      string: true
    }
  })
   .help()
   .alias('help','h')
   .argv;


//
// geocode.geocodeLocator(req, argv , (err, results) => {
//   if(err)   {
//   return console.log(err)
//   }
//   else {
//
//     weather.weatherChecker(req, argv , results, (err, response) => {
//       if(err)   {
//          console.log(err);
//       }
//       else {
//         console.log(`It is ${response.temperature} at ${response.addy}`)
//         return console.log(JSON.stringify(response, null, 5));
//
//       }
//     });
//   }
// });


geocode.geocodeLocator(req, argv).then((results) => {

return weather.weatherChecker(req, argv, results);
}).then((response) => {
        console.log(`It is ${response.temperature} at ${response.addy}`)
        return console.log(JSON.stringify(response, null, 5));

      }).catch((e) => {
        console.log(e);
      })
