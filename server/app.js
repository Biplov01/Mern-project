


// server/app.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('../routes/userRoutes'); // Adjust the path as needed

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://biplov001:Arduino12345@cluster0.hmtul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
