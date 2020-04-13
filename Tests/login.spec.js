process.env.NODE_ENV = 'test'
const request = require('supertest');
const mongoose = require("mongoose");
var express = require("express");
var passport = require("passport");
const User = require("../routes/index");

describe("login function", () => {
test('Should render without throwing an error', async() => {
	request(User)
	.get('/login')
	.set('Accept', 'application/json')
    .expect('Content-Type', '/json/')
	.expect(200); 
	//console.log(request.get(User));
    });
});