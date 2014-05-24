/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mongoClient = require('mongodb').MongoClient;

var atnCache = module.exports = function() {
    var db;
// Initialize connection once
    mongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, database) {
        if (err)
            throw err;

        db = database;
    });
    return {
        insert: function(body) {

        }
    }
}


