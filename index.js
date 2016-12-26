var path = require('path');
var express = require('express');
var app = express();
var indexRouter = require('./controllers/index.js');
var helloRouter = require('./controllers/hello.js');

// app.get('/',function(req,res){
// 	res.send('hello express');
// })

// app.get('/users',function(req,res){
// 	res.send('hello ' + req.query.name );
// })

app.set('views',path.join(__dirname,'views'));//设置存放模板目录
app.set('view engine','ejs');

app.use('/',indexRouter);
app.use('/',helloRouter);

app.listen(3000,function(){
	console.log("listen in port 3000");
});