var express = require('express');
var router = express.Router();

// add mongoose
var mongoose = require('mongoose');

// make this page to refer to the database
var Account = require('../models/account');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
