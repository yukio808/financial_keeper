var express = require('express');
var router = express.Router();
var User = require('../model/user');

router.get('/', function (req, res){
  res.render('index');
  console.log('webpage connect index.jade');
});
router.post('/new_user', function (req, res){
  var name = req.body.name;
  var password = req.body.pasword;
  var email = req.body.email;

  var user = new User({
    name : name,
    password : password,
    email : email
  });
  User.save(function (err, res){
    if(err) throw err;
    console.log('res, user',res, user);
  });
});

router.get('/users', function (req, res){
  User.find(function (err, users){
    if(err) throw err;
    res.locals.users = users;
    console.log('users',users);
    res.render('user');
  });
});

module.exports = router;
