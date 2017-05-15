var _ = require('lodash');
var DouyuService = require('../../service/douyu');
var sutil = require('../../lib/common');
var transform = require('../../lib/transform').douyu;
exports.list = function(req, res) {
    DouyuService.list({
        page: req.query.page,
        type: req.query.type
    }, function(err, data) {
        if (err) {
            res.send(sutil.fail(err))
        }

        if (_.isEmpty(data)) {
            res.send(sutil.fail(new Error("connect fail!")))
        }
        var resource = transform(data);

       	if(_.isEmpty(resource)){
       		res.send(sutil.fail(new Error("connect fail!")))
       	}
        res.send(sutil.ok(resource))
    });
};
