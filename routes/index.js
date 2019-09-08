var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
	res.render('index', { title: 'Cool Storage of Las Vegas, LLC' });
});

router.get('/about', function(req, res, next)
{
	res.render('about', {title: 'CSLV | About'});
});

router.get('/contact', function(req, res, next)
{
	res.render('contact', {title: 'CSLV | Contact'});
});


module.exports = router;
