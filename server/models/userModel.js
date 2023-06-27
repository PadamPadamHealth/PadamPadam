const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  userId: {type: Number, required: true, unique: true},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pronouns: { type: String, required: true },
  zipcode: { type: Number, required: true },
  location: { type: String, required: true },
  reviews: {},
}) 
const User = mongoose.model('user', userSchema);

module.exports = User;