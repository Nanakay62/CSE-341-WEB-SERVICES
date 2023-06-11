const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(require('./routes'));
//app.use('/', require('./routes'));

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => 
{console.log('Connected to MongoDB')});
  

app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port));