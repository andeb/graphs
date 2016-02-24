'use strict';

var express = require('express');
var app = express();

var conf = {
	port : 3000
};

app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
	res.sendFile('/index.html');
});

app.listen(conf.port, function () {
  console.log('App listening on port ' + conf.port + '.');
});