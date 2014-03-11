var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var load = require('express-load');
var mongoose = require('mongoose');

global.db = mongoose.connect('mongodb://localhost/voteandtalkers');
var db = mongoose.connection;

db.on('error', function(err){
    console.log('Connection error', err)
});

db.once('open', function () {
  console.log('Connection with MongoDB running!')
});

app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development env
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

load('service/models').then('service/helpers').then('service/controllers').then('service/api').into(app);

app.listen(app.get('port'), function(){
  console.log('Vote and Talkers are running on port ' + app.get('port'));
});
