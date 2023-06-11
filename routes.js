const express = require('express');
const router = express.Router();
const Contact = require('./models/contacts');

// GET /contacts route
router.get('/contacts', async (req, res) => {
  try {
    // Fetch contacts from the database
    const contacts = await Contact.find();

    // Send the contacts as a response
    console.log(contacts);
    res.json(contacts);
  } catch (error) {
    // Handle any errors that occur during the database operation
    res.status(500).json({ error: 'An error occurred while fetching contacts' });
  }
});

// GET /contacts/:id route
router.get('/contacts/:id', async (req, res) => {
    try {
      // Fetch a contact by ID from the database
      const contact = await Contact.findById(req.params.id);
  
      // If contact is not found, return an error response
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
  
      // Send the contact as a response
      res.json(contact);
    } catch (error) {
      // Error handler
      res.status(500).json({ error: 'An error occurred while fetching the contact' });
    }
  });

module.exports = router;

/*
const express = require('express');
const router = express.Router();
const contactsController = require('./controllers/contactsController');

// GET /contacts route
router.get('/contacts', contactsController.getAllContacts);

// GET /contacts/:id route
router.get('/contacts/:id', contactsController.getContactById);

module.exports = router;*/