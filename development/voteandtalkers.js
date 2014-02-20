var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var load = require('express-load');
var mongoose = require('mongoose');

global.db = mongoose.connect('mongodb://localhost/voteandtalkers');
var db = mongoose.connection;

db.on('error', function(err){
    console.log('Erro de conexao.', err)
});

db.once('open', function () {
  console.log('Conexão aberta.')
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));




// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

load('models').then('helpers').then('controllers').then('routes').into(app);

app.listen(app.get('port'), function(){
  console.log('Vote and Talkers are running on port ' + app.get('port'));
});
