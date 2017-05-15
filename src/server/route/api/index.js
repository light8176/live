var router = require('express').Router();
var douyu = require('../../ctrl/api/douyu');
var panda = require('../../ctrl/api/panda');

router.get('/douyu', douyu.list);
router.get('/panda', panda.list);

module.exports = router;