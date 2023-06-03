const jasmineRoute = (req,res) => {
  res.send("Jasmine Birch");
};

const emilyRoute = (req,res) => {
  res.send("Emily Birch");
};

const hannahRoute = (req,res) => {
    res.send("Hannah Birch");
  };



//This module exports the three objects,jasmine  hannah and emily route to server.js
  module.exports = {
    jasmineRoute,
    hannahRoute,
    emilyRoute
  };