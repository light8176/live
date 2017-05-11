var router = require('express').Router();
var home = require('../../ctrl/web/index')

/* GET home page. */
router.get('/', home.render)

module.exports = router;

