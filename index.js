var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('hello express');
})

app.get('/users',function(req,res){
	res.send('hello ' + req.query.name );
})

app.listen(3000,function(){
	console.log("listen in port 3000")
});