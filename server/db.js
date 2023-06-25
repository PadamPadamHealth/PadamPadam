const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  console.log('Connecting to DB')
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'apps',
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('mongodb', error);
    process.exit(1);
  }
};

module.exports = connectDB; 