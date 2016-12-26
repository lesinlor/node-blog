var express = require('express');
var router = express.Router();

router.get('/users/:name',function(req,res){
	// res.send('hey ' + req.params.name);
	res.render('hello',{
		name: req.params.name
	});
});

module.exports = router;