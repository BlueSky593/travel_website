
//var MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017/";

module.exports.insertContact = function(data, callback){
    MongoClient.connect(url, function(err, db) {
        if (err) callback(err); // send the error to the callback function
        var dbo = db.db("mydb");

        dbo.collection("booking").insertMany(data, function(err, resd) {
        if (err) callback(err); // send the error to the callback function
        console.log("Number of documents inserted: " + resd.insertedCount);
        db.close();
        // Send update information to the callback funcation
        callback(null, "Number of documents inserted: " + resd.insertedCount);
        });
    });   
}

module.exports.getContact = function(query, callback){
    MongoClient.connect(url, function(err, db) {
        if (err) callback(err.errmsg); // send the error to the callback function
        var dbo = db.db("mydb");
        dbo.collection("booking").findOne(query, function(err, result) {
          if (err) callback(err.errmsg); // send the error to the callback function
          //console.log(result.name);
          db.close();
          callback(null, result);
        });
      });
}

//module.exports.insertCustomers = insertCustomers;