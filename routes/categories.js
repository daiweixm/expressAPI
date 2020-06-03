var express = require('express');
var router = express.Router();
var cateController = require('../controllers/cateController')

/* GET home page. */
router.get('/', cateController.getCate);

module.exports = router;
