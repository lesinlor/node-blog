var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send('hello i am the index');
})

module.exports = router;