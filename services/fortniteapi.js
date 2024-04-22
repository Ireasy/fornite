var request = require('sync-request');

var fortniteapi = {
    getStatistik: async function(account) {
        var response = request('GET', 'https://fortniteapi.io/v1/stats?account=' + account, {
            headers: {
              'Authorization': process.env.FORTNITEAPI_KEY,              
            }
        })

        return JSON.parse(response.getBody('utf8'));
    }
}

module.exports = fortniteapi;