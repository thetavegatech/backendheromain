const express = require('express');
const routeAi4 = express.Router();
const Ai4data = require('../models/ai4data'); 
const {  getData } = require("../Controller/ai4dataController")
// Define route for fetching data
routeAi4.get('/ai4get', getData);

module.exports = routeAi4;
