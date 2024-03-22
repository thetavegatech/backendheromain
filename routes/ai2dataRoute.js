const express = require('express');
const routeAi2 = express.Router();
const Ai2data = require('../models/ai2data'); 
const {  getData } = require("../Controller/ai2dataController")
// Define route for fetching data
routeAi2.get('/ai2get', getData);

module.exports = routeAi2;
