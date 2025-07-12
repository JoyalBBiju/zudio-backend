// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 👇 Health check route (for browser or trainer)
app.get('/', (req, res) => {
  res.send('✅ Zudio Backend is Running!');
});


// Routes
app.use('/api/auth', require('./routes/auth'));

// DB Connection + Server Start
mongoose.connect(process.env.MONGO_URI)

.then(() => {
  console.log('MongoDB Connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.log(err));
