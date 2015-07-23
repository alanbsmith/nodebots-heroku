require('dotenv').load();
var express = require('express');
var path = require('path');
var expressLayouts = require("express-ejs-layouts");
var app = express();
var bodyParser = require('body-parser')
var twilio = require('./services/twilio');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/services')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request,response) {
  response.render('index');
});

app.get('/about', function(request,response) {
  response.render('about');
});

app.get('/events', function(request,response) {
  response.render('events');
});

app.get('/resources', function(request,response) {
  response.render('resources');
});

app.post('/rsvp', function(req,res){
  back = req.header('Referer') || '/';
  new twilio(req.body.name);
  res.redirect(back);
})

var server = app.listen(process.env.PORT || 8080, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port);
});