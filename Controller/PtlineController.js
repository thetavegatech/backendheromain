const PtLine = require('../models/ptlinedashboard');

const getData = async (req, res) => {
  try {
    const data = await PtLine.findOne().sort({_id : -1});
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    getData
}