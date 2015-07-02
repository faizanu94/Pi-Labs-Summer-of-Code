var express = require('express')
  , passport = require('passport')
  , util = require('util')
  , LocalStrategy = require('passport-local').Strategy;

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var monk = require('monk');
var db = monk('localhost:27017/chat');
//var flash    = require('connect-flash');

function findById(id, fn) {
var collection = db.get('messagescollection');
collection.findOne({_id:id},{},function(e,docs){
  if (docs._id) {
    fn(null,docs);
  } else {
    fn(new Error('User ' + id + ' does not exist'));
  }
});
}

function findByUsername(username, fn) {
var collection = db.get('messagescollection');
collection.findOne({username:username},{},function(e,docs){
    if (docs.username === username) {
      return fn(null, docs);
    }
  return fn(null, null);
});
}


var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// configure Express
app.use(cookieParser());
//app.use(express.methodOverride());
app.use(session({
  
  secret: 'keyboard cat'
  //resave: true,
  //saveUninitialized: true,
  //cookie : { secure : false, maxAge : (40 * 60 * 60 * 1000)}, // 4 hours
}));

app.use(passport.initialize());
app.use(passport.session());




// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.
passport.serializeUser(function(user, done) {
  console.log("ser",user);
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  console.log(id,"id");
  findById(id, function (err, user) {
    done(err, user);
  });
});


// Use the LocalStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a username and password), and invoke a callback
//   with a user object.  In the real world, this would query a database;
//   however, in this example we are using a baked-in set of users.
passport.use(new LocalStrategy(
  function(username, password, done) {
    // Find the user by username.  If there is no user with the given
    // username, or the password is not correct, set the user to `false` to
    // indicate failure and set a flash message.  Otherwise, return the
    // authenticated `user`.
    findByUsername(username, function(err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
      if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
      return done(null, user);
    })
  }
));







// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
//app.use(flash());
app.use(express.static(__dirname + '/public'));





app.get('/inbox', ensureAuthenticated, function(req, res){
  res.sendfile(__dirname + "/public/inbox.html")
  //if (req.isAuthenticated()) {   res.redirect('inbox.html') }
  //res.redirect('loginform.html')
});

app.get('/sent', ensureAuthenticated, function(req, res){
  res.redirect('sent.html')
});

app.get('/register', function(req, res){
  res.redirect('inbox.html')
});

app.get('/login', function(req, res){
  res.redirect('loginform.html')
});

app.get('/getinbox',ensureAuthenticated, function(req, res){
var collection = db.get('message');
  collection.find({to:req.user.email},{},function(e,docs){
    res.send(docs);
  });
});

app.get('/getmessageandfrom/*', function(req, res){
var collection = db.get('message');
  collection.findOne({"_id":req.params[0]},{},function(e,docs){
    res.send(docs);
  });
});

app.get('/getsent', function(req, res){
var collection = db.get('message');
  collection.find({from:req.user.email},{},function(e,docs){
    res.send(docs);
  });
});

app.get('/compose', function(req, res){
  res.redirect('inbox.html')
});

// POST /login
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
//
//   curl -v -d "username=bob&password=secret" http://127.0.0.1:3000/login
app.post('/register', 
  function(req, res) {
var collection = db.get('messagescollection');
    collection.insert(req.body, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.db.send("There was a problem adding the information to the database.");
        }
        else {
    res.redirect('/');
        }
    });
  });
  
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login'}),
  function(req, res) {
    console.log("success",req.user);
    console.log("s2",req.session);

    res.redirect('/inbox');
  });

app.post('/compose', 
  function(req, res) {
var collection = db.get('message');
req.body.from = req.user.email;
req.body.timestamp = new Date().getTime();
    collection.insert(req.body, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.db.send("There was a problem adding the information to the database.");
        }
        else {
    res.redirect('/inbox');
        }
    });
  });
// POST /login
//   This is an alternative implementation that uses a custom callback to
//   acheive the same functionality.
/*
app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      req.flash('error', info.message);
      return res.redirect('/login')
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);
});
*/

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(3030);


// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  console.log("req.user",req.user,req.session);
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}