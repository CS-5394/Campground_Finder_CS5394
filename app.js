var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp",{
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs")

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// //array to store campgrounds
// var campgrounds=[
// 		{name:"Pleasant creek",image:"https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__480.jpg"},
// 		{name:"sam's creek",image:"https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092__480.jpg"},
// 		{name:"three creek",image:"https://cdn.pixabay.com/photo/2018/12/24/22/19/camping-3893587__480.jpg"}
// 	];

// Campground.create(
//      {
//          name: "Granite Hill", 
//          image: 	"https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__480.jpg",
//          description: "This is a huge granite hill, no bathrooms.  No water. Beautiful granite!"
         
//      },
//      function(err, campground){
//       if(err){
//           console.log(err);
//       } else {
//           console.log("NEWLY CREATED CAMPGROUND: ");
//           console.log(campground);
//       }
//     });

app.get("/",function(req,res){
	res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
          res.render("campgrounds",{campgrounds:allCampgrounds});
       }
    });
});

//CREATE - add new campground to DB
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new",function(req,res){
	res.render("new.ejs");
});

app.listen(3000,function(){
	console.log("The campground server has been started");
});