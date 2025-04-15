const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, { ssl: true });
    
    console.log('✅ MongoDB connected!');
  } catch (err) {
    console.error('❌ Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
