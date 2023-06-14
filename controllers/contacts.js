const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


const getAllContacts = async (_req, res, next) => {
  const result = await mongodb.getDb().db('lesson2').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getContactById = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('lesson2')
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

/*const createContact = async (req,res) => {
  console.log("Creating new contact");
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongodb.getDb().db("lesson2").collection("contacts").insert(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  }
  else {
    res.status(500).json(response.error || "Error encountered: Contact not created");
  }
}*/

const createContact = async (req, res) => {
  console.log("Creating new contact");
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  try {
    const response = await mongodb.getDb()
      .db("lesson2")
      .collection("contacts")
      .insertOne(contact);

    if (response.result.acknowledged === 1) {
      res.status(201).json(response.ops[0]);
    } else {
      res.status(500).json("Error encountered: Contact not created");
    }
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json("Error encountered: Contact not created");
  }
};

const updateContact = async (req,res) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  }
  const response = await mongodb.getDb().db("lesson2").collection("contacts").replaceOne({_id:userId}, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  }
  else{
    res.status(500).json(response.error || "Error encountered: The contact was not updated");
  }
};

const deleteContact = async (req,res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db("lesson2").collection("contacts").remove({_id: userId}, true);
  console.log(response);
  if(response.deleteCount > 0) {
    res.status(204).send();
  }
  else {
    res.status(500).json(response.error || "An error occurred while trying to delete the contact. Try again");
  }
}
module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};