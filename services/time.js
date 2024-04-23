
var time = {
  timeCount: function() {
    var today = new Date();
    return today.toLocaleString('de-DE', { timeZone : 'Europe/Berlin'}); 
  }
}

module.exports = time