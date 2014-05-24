/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');
var path = require('path');
var socketio = require('socket.io');
var cache = require('./cache/atnCache')();
var express = require('express'), app = express(), server = http.createServer(app);
console.log("Created express server");

var mongoClient = require('mongodb').MongoClient;
var db;

// Initialize connection once
mongoClient.connect("mongodb://localhost:27017/test", function(err, database) {
    if (err)
        throw err;

    db = database;
});


var viewEngine = 'jade'; // modify for your view engine

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', viewEngine);
    app.use(express.logger('dev'));
    //app.use(express.bodyParser());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    //app.use(express.cookieParser('snowWhite'));
    //app.use(express.session());
    app.use(app.router);
    app.use(express.static(__dirname + '/public/app'));

});

server.listen(process.env.PORT || 9080);
var addr = server.address().address;
console.log('Started listening on: '.concat(addr).concat(':').concat(process.env.PORT || 9080));