process.env.NODE_ENV = 'test'
const request = require("supertest");
// we also need our app for the correct routes!
const app= require("../app");

describe('Test the root path', () =>{	
	
     it ("It should response the GET method", async() => {	  		 
	request(app)
	.get('/campgrounds')
	.set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
	.expect(200); 
   });
		 
     test ('Should post the new campground', async() => {			
		
		request(app).post("/campgrounds")  		
        .send({
           username: 'AnnieJK1',
			 password: '123'		 
         
        })
	    .set('Accept', 'application/json')
	    .expect('Content-Type', '/json/')
        .expect(200);		
	
});
	   test ('Should get the new campground', async() => {			
		
		request(app)
		.get("/campgrounds/new")         
	    .set('Accept', 'application/json')
	    .expect('Content-Type', '/json/')
        .expect(200);		
	
});
	test ('Should get the /campgrounds/:id ', async() => {
	      request(app)
        .get('/campgrounds/:id')
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(200)
	
	 
  });
	test ('Should get the /campgrounds/:id/edit ', async() => {
	      request(app)
        .get('/campgrounds/:id/edit')
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(200)
	
	 
  });
	
	test ('Should put the /campgrounds/:id ', async() => {
	      request(app)
        .put('/campgrounds/:id')
        .set('Accept', 'application/json')
        .expect('Content-Type', '/json/')
        .expect(200)
	
	 
  });
	
});
	
	
	
	
	