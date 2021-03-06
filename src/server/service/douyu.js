'use strict'

var request = require('superagent');

exports.list = function(options, callback) {
	console.log(options);
    request
        .post('https://m.douyu.com/roomlists')
        .send(options)
        .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        .set('X-Requested-With', 'XMLHttpRequest')
        .end(function(err, res){
        	if(err){
        		return callback(err);
        	}
        	callback(null, JSON.parse(res.text));
        });
};
