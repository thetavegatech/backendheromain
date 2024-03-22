const express = require('express');
const router = express.Router();
const PtLine = require('../models/ptlinedashboard'); 
const {  getData } = require("../Controller/PtlineController")
// Define route for fetching data
router.get('/ptlinedata', getData);

// Define other routes here if needed...
// Route to get HWPUMPSTATLBL values within a specific time range
router.get('/HWPUMPMOTLBL', async (req, res) => {
    try {
      const { startTime, endTime } = req.query; // Extract start and end time from query parameters
  
      // Validate query parameters
      if (!startTime || !endTime) {
        return res.status(400).json({ message: 'Please provide both start and end time.' });
      }
  
      // Parse start and end time strings into Date objects
      const startDate = new Date(startTime);
      const endDate = new Date(endTime);
  
      // Query MongoDB for documents within the specified time range
      const result = await PtLine.find({ Date_Time: { $gte: startDate, $lt: endDate } })
                                 .select('HWPUMPMOTLBL Date_Time') // Select only relevant fields
                                 .sort({ Date_Time: -1 }); // Sort by Date_Time in descending order
  
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
