
const routes = require('express').Router;
const lesson1Controller = require('./controllers/lesson1.js');

routes.get('/', lesson1Controller.jasmineRoute);
routes.get('/emily', lesson1Controller.emilyRoute);
routes.get('/hannah', lesson1Controller.hannahRoute);

module.exports = routes;