const Ai2data = require('../models/ai2data');

const getData = async (req, res) => {
    try {
      const data = await Ai2data.findOne();
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports = {
      getData
  }