const jasmineRoute = (req,res) => {
  res.send("Jasmine Apaloo");
};

const emilyRoute = (req,res) => {
  res.send("Emily Birch");
};

const hannahRoute = (req,res) => {
    res.send("Hannah Birch");
  };



//This module exports the two objects, hannah and emilyroute to server.js
  module.exports = {
    hannahRoute,
    emilyRoute,
    jasmineRoute
  };