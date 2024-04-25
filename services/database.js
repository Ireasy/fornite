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
                    country: row[3],
                    birthday: row[4],
                    games: _.split(row[5], ','),
                    Keyboard: row[6],
                    KeyboardLink: row[7],
                    KeyboardPicture: row[8],
                    Mouse: row[9],
                    MouseLink: row[10],
                    MousePicture: row[11],
                    Headset: row[12],
                    HeadsetLink: row[13],
                    HeadsetPicture: row[14],
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