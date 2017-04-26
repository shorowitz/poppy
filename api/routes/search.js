const express = require('express');
const search = express.Router();
const db = require('../db/pg');
const dotenv = require('dotenv');
dotenv.load();

search.get('/', db.getPlants, (req, res) => {
  res.send(res.data)
})

module.exports = search;
