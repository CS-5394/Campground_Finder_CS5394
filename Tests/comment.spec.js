process.env.NODE_ENV = 'test'
const request = require("supertest");
// we also need our app for the correct routes!
const app= require("../app");

describe('Test the root path of comment ', () =>{	
	
     it ("It should response the GET method", async() => {	  		 
	request(app)
	.get('/campgrounds/:id/comments/new')
	.set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
	.expect(200); 
   });
	
	
  it ("It should response the post comment route", async() => {	  		 
	request(app)
	.post('/campgrounds/:id/comments')
	.set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
	.expect(200)
   });
	
	 it ("It should get the comment edit route", async() => {	  		 
	request(app)
	.get('/campgrounds/:id/comments/:comment_id/edit')
	.set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
	.expect(200)
   });
	
	
	 it ("It should get the comment update route", async() => {	  		 
	request(app)
	.put('/campgrounds/:id/comments/:comment_id')
	.set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
	.expect(200)
   });
	
	 it ("It should response the delete comment route", async() => {	  		 
	request(app)
	.delete('/campgrounds/:id/comments/:comment_id')
	.set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
	.expect(200)
   });
	
});