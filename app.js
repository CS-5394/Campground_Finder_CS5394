var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs")


//array to store campgrounds
var campgrounds=[
		{name:"Pleasant creek",image:"https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__480.jpg"},
		{name:"sam's creek",image:"https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092__480.jpg"},
		{name:"three creek",image:"https://cdn.pixabay.com/photo/2018/12/24/22/19/camping-3893587__480.jpg"}
	];

app.get("/",function(req,res){
	res.render("landing");
});

app.get("/campgrounds",function(req,res){
	res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res){
	
	
	//get data from form and add it to campgrounds array
	var name=req.body.name;
	var image=req.body.image;
	var newCampground={name:name, image:image}
	campgrounds.push(newCampground);
	//redirect back to campgrounds page
	res.redirect("/campgrounds");
	
});

app.get("/campgrounds/new",function(req,res){
	res.render("new.ejs");
});

app.listen(3000,function(){
	console.log("The campground server has been started");
});