

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: { type: String, required: true, maxlength: 128 },
  // company: { type: String, maxlength: 64 },
  // companyWebsite: { type: String, maxlength: 128 },
  // location: { type: String },
  // startDate: { type: Date },
  // endDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  headTitle: { type: String, required: true, maxlength: 32 },
  classification: { type: String, required: true, maxlength: 10 },
  slideUrl: { type: String },
  webSite: String,
  description: String,
  userId: { type: String, required: true }
})

module.exports = mongoose.model('Portfolio', portfolioSchema);