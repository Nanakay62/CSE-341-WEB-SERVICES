const express = require('express');
const dotenv = require('dotenv');
const { initDb } = require('./db/connect');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;

// Initialize the database connection
initDb((err) => {
  if (err) {
    console.error('Sorry, there was an error connecting to the database', err);
    process.exit(1);
  }
  console.log('Database connected');
});

app.use('/', routes);

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});