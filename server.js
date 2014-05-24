/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');
http.createServer(function(req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
        });
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8'
    });
    MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
        if(!err) {
        console.log("We are connected");
        var collection = db.collection('test');
        collection.insert(body, {w:1}, function(err, result) {});
        };   
}).listen(9080, "");
