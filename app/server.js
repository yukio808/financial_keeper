var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var finance = require('./controller/finance.js');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
// var auth = require('./controllers/auth');
var mongoose = require('mongoose');
// data base connection through mongodb
mongoose.connect('mongodb://localhost/financial_keeper');
//dependancy use for authentication
app.use(session({ secret: 'keyboard cat',   resave: false,
  saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
//dependancy use for main services and addons 
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.set('view engine', 'jade');
app.use(methodOverride('_method'));
app.use(express.static('public/'));
app.use(cookieParser());
app.use(finance);
// app.get('/', function (req, res){
//   res.send('sucess');
//   console.log('sucess');
// });
var server = app.listen('3000', function (){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Application listening at http://%s:%s', host, port);
});