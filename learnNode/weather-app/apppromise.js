console.log('starting app');

const axios  = require('axios');

// stores the terminal inputs as an object --address '124'  = address: 124
const yargs  = require('yargs');


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

var encodedAddress = encodeURIComponent(argv.address);
var geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address= ${encodedAddress}`;

axios.get(geoUrl).then((res) => {
  console.log(res)
  console.log(res.data)
});
