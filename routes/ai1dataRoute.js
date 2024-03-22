const express = require('express');
const route = express.Router();
const Ai1data = require('../models/ai1datas'); 
const {  getData } = require("../Controller/ai1dataController")
// Define route for fetching data
route.get('/ai1get', getData);

module.exports = route;
