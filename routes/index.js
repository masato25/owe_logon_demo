var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();
var cb = require('cb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyLogonTest', user: req.user });
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    Account.register(req.body.username , req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account, message: "註冊失敗,請在嘗試一次" });
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;
