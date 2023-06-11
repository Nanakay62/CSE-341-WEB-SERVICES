const express = require('express');
const routes = express.Router();
const lesson1Controller = require('../controllers/lesson1.js');
const contactsController = require('../controllers/contactsController.js');


routes.get('/', lesson1Controller.jasmineRoute);
routes.get('/emily', lesson1Controller.emilyRoute);
routes.get('/hannah', lesson1Controller.hannahRoute);

// Add the new routes for contacts
routes.get('/contacts', contactsController.getAllContacts);
routes.get('/contacts/:id', contactsController.getContactById);


module.exports = routes;