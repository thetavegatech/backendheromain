const express = require('express');
const routeAi3 = express.Router();
const Ai3data = require('../models/ai3data'); 
const {  getData } = require("../Controller/ai3dataController")
// Define route for fetching data
routeAi3.get('/ai3get', getData);

module.exports = routeAi3;
