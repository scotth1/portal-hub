/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http'), path = require('path');
var express = require('express'), bodyParser = require('body-parser'), app = express(), server = http.createServer(app);
//var db = require('./db/portals');

var mongoClient = require('mongodb').MongoClient;
var db;
// Initialize connection once
mongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, database) {
    if (err)
        throw err;

    db = database;
});

app.use(express.static(__dirname + '/public/app'));
app.use(bodyParser());
app.post('/portals', function(req, res) {
    // save portal object
    console.log("BODY: "+req.body);
    var body = JSON.parse(req.body);
    var collection = db.collection('test');
    collection.insert(body, {w: 1}, function(err, result) {
        if (err) {
            res.send(500, "Failed to save");
            console.log(err);
        } else {
            res.send(200);
            console.log("OK!");
        }
    });
});

server.listen(process.env.PORT || 9080);
var addr = server.address().address;
console.log('Started listening on: '.concat(addr).concat(':').concat(process.env.PORT || 9080));


/********
 http.createServer(function(req, res) {
 var body = "";
 req.on('data', function(chunk) {
 body += chunk;
 });
 res.writeHead(200, {
 'Content-Type': 'text/plain; charset=UTF-8'
 });
 res.end('Hello from portal-hub.\n');
 MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
 if (!err) {
 console.log("We are connected");
 var collection = db.collection('test');
 collection.insert(body, {w: 1}, function(err, result) {
 });
 }
 });
 }).listen(9080, "");
 
 **********/
