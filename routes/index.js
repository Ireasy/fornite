var express = require('express');
var router = express.Router();
var _ = require('lodash')

/* GET home page. */
router.get('/', function(req, res, next) {

  const freunde = ['Per', 'Tim', 'Peter', 'Max'];

  res.render('index', {
     freunde: freunde
  });
});

module.exports = router;
