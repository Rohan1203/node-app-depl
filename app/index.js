var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.set('view engine', 'ejs');


var url = "mongodb://admin:root@mongodb";

app.get('/', (req, res)=>{
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("user-account");
      dbo.collection("users").find().toArray(function(err, result) {
        if (err) throw err;
          console.log(result);
          res.render('index', {data: result});
      });
    });
    
  });




const port = 3300
app.listen(port, ()=>{
    console.log('application is running on the port : ', port);
});