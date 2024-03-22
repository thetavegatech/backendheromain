const Ai3data = require('../models/ai3data');

const getData = async (req, res) => {
    try {
      const data = await Ai3data.findOne();
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports = {
      getData
  }