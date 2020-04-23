process.env.NODE_ENV = 'test';
const request = require('supertest');
const mongoose = require('mongoose');
var express = require('express');
var passport = require('passport');
const User = require('../routes/index');

//login test case
describe('test the root of index.js', () => {
  test('Should reponse the get / route', async () => {
    request(User)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', '/json/')
      .expect(200);
    //console.log(request.get(User));
  });
  test('Should response the /register route', async () => {
    request(User)
      .get('/register')
      .set('Accept', 'application/json')
      .expect('Content-Type', '/json/')
      .expect(200);
    //console.log(request.get(User));
  });

  test('Should render without throwing an error', async () => {
    request(User)
      .get('/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', '/json/')
      .expect(200);
    //console.log(request.get(User));
  });

  test('Should response the logout route', async () => {
    request(User)
      .get('/logout')
      .set('Accept', 'application/json')
      .expect('Content-Type', '/json/')
      .expect(200);
    //console.log(request.get(User));
  });
});
