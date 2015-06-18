var port = 3030;
var messages ={};
/////////
var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var app = express();
var monk = require('monk');
var db = monk('localhost:27017/chat');
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    
    next();
});

app.use('/', express.static(__dirname + '/public'));

app.get("/data", function(req,res,next){
var collection = req.db.get('messagescollection');
collection.find({},{},function(e,docs){

    console.log(docs);
    res.send(docs);
});

//	res.send(messages);
});

app.get("/home", function(req,res,next){
	//console.log("/");
	res.send(//{
//        status: "200",
  //      msg: "OK",
    //    timestamp: new Date().getTime(),
      //  description:"Simple Server."
    //}
    "Faizan Uddin"
    );
});

app.post("/send/*",jsonParser,function(req,res){
 var path = req.params[0];
 messages[req.params[0]]=req.body;
 console.log(path,req.body);

var collection = db.get('messagescollection');

    // Submit to the DB
    collection.insert(req.body, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.db.send("There was a problem adding the information to the database.");
        }
        else {
            res.sendStatus(200);
        }
    });
  });

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);

});