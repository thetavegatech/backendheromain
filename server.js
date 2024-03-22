const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require("./routes/Ptlineroute")
const cors = require("cors")
const PtLine = require('./models/ptlinedashboard'); 
const route = require('./routes/ai1dataRoute');
const routeAi2 = require('./routes/ai2dataRoute');
const routeAi3 = require('./routes/ai3dataRoute');
const routeAi4 = require('./routes/ai4dataRoute');
// Connect to MongoDB
mongoose.connect('mongodb://192.168.29.174:27017/heroplant', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
// const dataRoutes = require('./routes/dataRoutes');
// app.use('/api/data', dataRoutes);
// // Define other routes if needed...

app.use("/api", router)
app.use("/api", route)
app.use("/api", routeAi2)
app.use("/api", routeAi3)
app.use("/api", routeAi4)

// Define route to get data for HWPUMPMOTLBL
app.get('/api/ptline/hwpumpmotlbl', async (req, res) => {
  try {
    // Query the database for the desired field
    const ptLineData = await PtLine.find({}, 'HWPUMPMOTLBL').sort({ _id: -1 });

    // Send the response with the queried data
    res.json(ptLineData);
  } catch (error) {
    // If there's an error, send an error response
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
