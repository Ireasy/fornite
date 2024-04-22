var express = require('express');
var router = express.Router();
var _ = require('lodash')

/* GET home page. */
router.get('/', function(req, res, next) {

  const freunde = ['Johannes', 'Tim', 'Peter', 'Max'];

  res.render('index', {
     freunde: freunde,
     zeit:timeCount()
  });
});

module.exports = router;
function timeCount() {
  var today = new Date();
  return today.toLocaleString('de-DE', { timeZone : 'Europe/Berlin'});

  
}