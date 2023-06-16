const express = require('express');
const router = express.Router();
const swaggerRoutes = require('./swagger');

router.use('/contacts', require('./contacts'));
router.use('/', swaggerRoutes);

module.exports = router;


//const lesson1Controller = require('../controllers/lesson1.js');
/*routes.get('/', lesson1Controller.jasmineRoute);
routes.get('/emily', lesson1Controller.emilyRoute);
routes.get('/hannah', lesson1Controller.hannahRoute);*/
// Add the new routes for contacts
//routes.get('/contacts/:id', contactsController.getContactById);


