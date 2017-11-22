const express = require('express');

const app = express();

const hbs = require('ejs')

const fs  = require('fs');

const port = process.env.PORT || 3000;



app.set('view engine', 'ejs');


app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  fs.appendFile('server.log', log + '\n', (err) => {
  if(err) return console.log('Unable to append to server.log')
  next();
  })



})

// should be added after so to ensure it does not fire before the
//first maintenance middleware

app.use(express.static(__dirname  + '/public'));

// app.use((req, res, next) => {
//     res.render('maintenance');
//
// })

// app.engine('hbs', hbs({
//     extname: 'hbs',
//     defaultLayout: 'base',
//     layoutDir: __dirname + '/views/layouts',
//     partialsDir  : [
//         //  path to your partials
//         __dirname + '/views/partials',
//     ]
// }));
//
// console.log(hbs.registerPartials.toString())
// console.log(hbs)
// console.log('hbbbbbbsss')

// console.log(hbs.registerPartials.toString())
// console.log(hbs.handlebars)
//
// hbs.registerPartials(__dirname + '/views/partials/about.hbs', (err) =>{
// console.log('test')
//   console.log(err);
// });

app.get('/', (req, res) => {

     // res.send('<h1>Hello Express!</h1>');
     res.send({
       name: 'Windie',
       likes: [
         'Being in control of my life',
         "Traveling"
       ]
     })
});

app.get('/about', (req, res) => {
     // res.send('<h1>Hello Express!</h1>');
res.render('about', {
  pageTitle: 'About Page',
  currentYear: new Date().getFullYear()
  });
});



app.get('/bad', (req, res) => {
     // res.send('<h1>Hello Express!</h1>');
   res.send({
       errorMessage: 'Unable to show req.'

     })
});



app.listen(port, () => {
  console.log(`Port ${port} says: All Good in the Hood!` )
});
