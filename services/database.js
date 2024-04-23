var request = require('sync-request');
var _ = require('lodash');

var database = {
    getFreunde: function() {
        var response = request('GET', `https://sheets.googleapis.com/v4/spreadsheets/` + process.env.GOOGLE_SPREADSHEET + `/values:batchGet?key=` + process.env.GOOGLE_SPREADSHEETS_KEY + `&ranges=Tabellenblatt1\!A1:Z999`);

        var data = JSON.parse(response.getBody('utf8'));

        var players = _.map(
            data.valueRanges[0].values,
            row => {
                return {
                    account: row[0],
                    name: row[1],
                    team: row[2],
                };
            }
        );
        
        return players;        
    },
    getFreund: function(account) {
        return _.find(this.getFreunde(), (freund) => freund.account == account)
    }    
}

module.exports = database;