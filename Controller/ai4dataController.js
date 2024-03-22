const Ai4data = require('../models/ai4data');

const getData = async (req, res) => {
    try {
      const data = await Ai4data.findOne();
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports = {
      getData
  }