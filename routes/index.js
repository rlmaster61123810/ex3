var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'หน้าแรก' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'นายนนธวัช วุฒิเฟย' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: '087-1748105' });
});

module.exports = router;
