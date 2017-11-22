console.log('starting geocode...')
//
// module.exports.geocodeLocator = (req, argv, callback) => {
module.exports.geocodeLocator = (req, argv) => {



    return new Promise((done, reject) => {



//encodes the spaces into %20 or converts the format for a protocol to its syntax
var encodedAddress = encodeURIComponent(argv.address);

// request  -makes the request to the url of the google  servers
req({
url: `https://maps.googleapis.com/maps/api/geocode/json?address= ${encodedAddress} `,
json: true
}, (err, res, body) => {


// console.log(JSON.stringify(body, null, 2))
// console.log(JSON.stringify(res.statuscode, null, 4)) //second argument filters out properties
// body = JSON.parse(body)
if(err) { reject('Unable to connect to servers') }

//checks the response's status
else if(body.status === 'ZERO_RESULTS'){
 reject(`No results found for ${argv.address}`)
//if no internet connection or connection errors such as url/domain does not exist
} else {
  var coordinates = {
          addy:  body.results[0].formatted_address,
      latitude:  body.results[0].geometry.location.lat,
     longitude:  body.results[0].geometry.location.lng
  }
   done(coordinates);
}




 // reject(`No results found for ${argv.address}. Try another address`)
// callback(null, {
//   address:   body.results[0].formatted_address,
//   latitude:  body.results[0].geometry.location.lat,
//   longitude: body.results[0].geometry.location.lng
// })

//
// console.log(`Address:    ${body.results[0].formatted_address}`)
// console.log(`Latitude:   ${body.results[0].geometry.location.lat}`)
// console.log(`Longitude : ${body.results[0].geometry.location.lng}`)

})
})
}
