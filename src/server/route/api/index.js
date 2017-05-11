var router = require('express').Router();
var douyu = require('../../service/douyu')

router.get('/douyu', douyu.home)

module.exports = router;