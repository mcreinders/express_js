/**
 * Created by user on 1/6/16.
 */

var express = require('express');
var callmodules = require('./callmodules');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '/public/views/index.html'));
});

app.get('/balance', function(request, response){
    //response.send(callmodules.acctBalDisplay());
    response.send(callmodules.randomDollars(100, 1000000));
});

var server = app.listen(3000, function(){
    var port = server.address().port;

    console.log('Listening on port', port);
});