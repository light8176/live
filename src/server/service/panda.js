'use strict'

var request = require('superagent');

exports.list = function(options, callback) {
    request
        .get('http://www.panda.tv/live_lists?status=2&order=person_num&pageno='+ options.page +'&pagenum=' + options.count)
        .end(function(err, res){
        	if(err){
        		return callback(err);
        	}
        	callback(null, JSON.parse(res.text));
        });
};
