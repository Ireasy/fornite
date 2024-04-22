var express = require('express');
var router = express.Router();
var _ = require('lodash')

/* GET home page. */
router.get('/', function(req, res, next) {
  const freunde = req.app.get('database').getFreunde();

  res.render('index', {
     freunde: freunde
  });
});

module.exports = router;
