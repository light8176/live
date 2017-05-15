var _ = require('lodash');
var PandaService = require('../../service/panda');
var sutil = require('../../lib/common');
var transform = require('../../lib/transform').panda;
exports.list = function(req, res){
	PandaService.list({
		page: req.query.page,
		count: req.query.count
	}, function(err, data){
		if(err){
			res.send(sutil.fail(err))
		}
		if(_.isEmpty(data)){
			res.send(sutil.fail(new Error("connect fail!")))
		}
		var resource = transform(data);
		if(_.isEmpty(resource)){
       		res.send(sutil.fail(new Error("connect fail!")))
       	}
		res.send(sutil.ok(resource))
	});
};
