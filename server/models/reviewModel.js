const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = Schema({
  providerName: { type: String, required: true },
  pronouns: { type: String },
  specialty: { type: String, required: true },
  address: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, default: ' ' },
  dateOfReview: { type : Date, required : true }
}) 
const Review = mongoose.model('review', reviewSchema);

module.exports = Review;