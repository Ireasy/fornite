var express = require('express');
var router = express.Router();
var _ = require('lodash')

/* GET home page. */
router.get('/', function(req, res, next) {

  const freunde = ['Per', 'Tim', 'Peter', 'Max'];

  res.render('index', {
     freunde: freunde,
     zeit:timeCount()
  });
});

module.exports = router;
function timeCount() {
  var today = new Date();

  var day = today.getDate();
  var month = today.getMonth()+1;
  var year = today.getFullYear();

  var hour = today.getHours();
  if(hour<10)hour = "0"+hour;

  var minute = today.getMinutes();
  if(minute<10)minute = "0"+minute;

  var second = today.getSeconds();
  if(second<10)second = "0"+second;

  Calendar calendar = new GregorianCalendar();
TimeZone timeZone = calendar.getTimeZone();




  return day+"/"+month+"/"+year+" |"+hour+":"+minute+":"+second;



  
}