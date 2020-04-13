var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose    = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var User = require("./models/user");
var seedDB = require("./seeds");

var commentRoutes = require("./routes/comments"),
	campgroundRoutes = require("./routes/campgrounds"),
	indexRoutes = require("./routes/index");


mongoose.connect("mongodb://localhost/yelp_camp",{
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
//app.use(flash());

//seedDB(); //seed the database

//PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "Once again Rusty wins cutest dog!" ,
		resave: false,
		saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
				  res.locals.currentUser = req.user;
					next();
				  });

app.use(commentRoutes);
app.use(campgroundRoutes);
app.use(indexRoutes);

//Condition to resolve port error for test cases execution
if (process.env.NODE_ENV !== 'test') {
app.listen(3000,function(){
	console.log("The campground server has been started");
});
	}

module.exports = app;
	