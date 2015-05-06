var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

app.get('/', function (req, res){
  res.send('sucess');
  console.log('sucess');
});

var server = app.listen('3000', function (){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Application listening at http://%s:%s', host, port);
});