const Ai1data = require('../models/ai1datas');

const getData = async (req, res) => {
    try {
      const data = await Ai1data.findOne();
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports = {
      getData
  }