var express = require('express');
var getBalance = require('../services/getBalance');
var router = express.Router();


/* GET balance of an address */
router.get('/', function(req, res, next) {
  getBalance(req.query.address)
  .then(ethers => res.render('index', { balance: ethers }))
});

module.exports = router
