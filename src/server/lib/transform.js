var _ = require('lodash');
var op = require('object-path');
exports.douyu = function(data) {
    if (_.isEmpty(data.result)) {
        return {};
    }
    var list = data.result;
    var items = [];
    _.each(list, function(v, i) {
        return items.push(douyuTransform(v));
    });
    return {
        list: items,
        total: op.get(data, 'pageCount')
    };
};

exports.panda = function(data) {
    if (_.isEmpty(op.get(data, 'data'))) {
        return {};
    }
    var res = op.get(data, 'data');
    var list = op.get(res, 'items');
    var items = [];
    _.each(list, function(v, i) {
        return items.push(pandaTransform(v));
    });
    return {
        list: items,
        total: op.get(res, 'total')
    };
};

/*
	roomName		房间名
	roomId			房间Id
	userName		主播名称
	onlineNum		在线人数
	liveImg			房间略缩图
	category		类别
	category.id 	类别ID
	category.name 	类别名称
	category.ab 	类别名称缩写

*/

var douyuTransform = function(res) {
    return {
        roomName: op.get(res, 'room_name'),
        roomId: op.get(res, 'room_id'),
        userName: op.get(res, 'nickName'),
        onlineNum: op.get(res, 'online'),
        liveImg: op.get(res, 'room_src'),
        category: {
            id: op.get(res, 'cate1_id'),
            name: "",
            ab: ""
        }
    }
};

var pandaTransform = function(res) {
    return {
        roomName: op.get(res, 'name'),
        roomId: op.get(res, '371037'),
        userName: op.get(res, 'userinfo.nickName'),
        onlineNum: op.get(res, 'person_num'),
        liveImg: op.get(res, 'pictures.img'),
        category: {
            id: "",
            name: op.get(res, 'classification.cname'),
            ab: op.get(res, 'classification.ename')
        }
    }
};
