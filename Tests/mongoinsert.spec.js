const {MongoClient} = require('mongodb');
var User = require('../models/user');
var Camp = require('../models/campground');
var Comment = require('../models/comment');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
		useUnifiedTopology: true
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a new user into User collection', async () => {
    const users = db.collection('user');

    const mockUser = { name: 'John',password:'John123'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({name: 'John'});
	  console.log(insertedUser.name);
    expect(insertedUser.name).toEqual(mockUser.name);
  });
	
	
	it('should insert a new campground into campground model', async () => {
    const camp = db.collection('campground');

    const mockCamp = { name: 'Gaudalupe',image:'https://www.nps.gov/im/chdn/images/El-Capitan_GUMO_NPGallery_Public-domain_D-Buehler_cropped.jpg?   maxwidth=650&autorotate=false',description:'Great',author:{id:'_123',username:'John'}};
    await camp.insertOne(mockCamp);

    const insertedCamp = await camp.findOne({name: 'Gaudalupe'});
	  console.log(insertedCamp.name);
    expect(insertedCamp.name).toEqual(mockCamp.name);
  });
	
	
	
	it('should insert a new comment into comment collection', async () => {
    const comments = db.collection('comment');

    const mockComment = { text:'Nice Camp',author:{id:'_123',ref:'Users'},username:'John'};
    await comments.insertOne(mockComment);

    const insertedComment = await comments.findOne({username: 'John'});
	  console.log(insertedComment.username);
    expect(insertedComment.text).toEqual(mockComment.text);
  });
	
});