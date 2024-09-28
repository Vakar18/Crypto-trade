require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const tradeRoutes = require('./routes/tradeRoutes');

const app = express();
const PORT =  3000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use('/api/trades', tradeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
