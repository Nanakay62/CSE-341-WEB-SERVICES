const express = require('express');
const routes = express.Router();

routes.use('/contacts', require('./contacts.js'));

module.exports = routes;




//const lesson1Controller = require('../controllers/lesson1.js');
/*routes.get('/', lesson1Controller.jasmineRoute);
routes.get('/emily', lesson1Controller.emilyRoute);
routes.get('/hannah', lesson1Controller.hannahRoute);*/
// Add the new routes for contacts
//routes.get('/contacts/:id', contactsController.getContactById);


