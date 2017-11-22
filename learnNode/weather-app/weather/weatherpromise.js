console.log('starting weather..')


// module.exports.weatherChecker = (req, argv, results, callback) => {
  module.exports.weatherChecker = (req, argv, results) => {
    return new Promise((done, reject) => {
var coordinates = {
  lat: results.latitude,
  lng: results.longitude,
  addy: results.addy
}

//long latitude
  req({
    url: `https://api.darksky.net/forecast/92c7e047f7541c5725bfd6991151a348/${coordinates.lat}, ${coordinates.lng}`,
    json:true
  }, (err, res, body) => {

      if(!err && res.statusCode === 200){

           coordinates.temperature = body.currently.temperature;

           done( coordinates)
    }
      reject('Cannot connect to servers')
 })
});


}
