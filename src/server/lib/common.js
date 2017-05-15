exports.ok = function(data){
	return {
		status: 0,
		msg: "success",
		data: data
	}
}

exports.fail = function(err){
	return {
		status: -1,
		msg: err.message,
		data: {}
	}
}
