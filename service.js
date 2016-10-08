var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }));

//测试根目录
app.get('/', function (req, res) {
  res.status(200).send('Hi Docker');
});

//启动应用
var server = app.listen(8888, function () {
  //var host = server.address().address;
  //var port = server.address().port;
  //console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
