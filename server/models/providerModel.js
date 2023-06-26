const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerSchema = Schema({
  providerID: { type: Number, required: true, unique: true },
  providerName: { type: String, required: true },
  pronouns: { type: String },
  specialty: { type: String, required: true },
  address: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number },
  reviews: {},
}) 
const Provider = mongoose.model('provider', providerSchema);

module.exports = Provider;