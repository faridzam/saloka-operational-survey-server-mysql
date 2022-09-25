var mongoose = require("mongoose"),
Schema = mongoose.Schema;

const SatisfactionSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId, 
    ref: 'Customer', 
    required: true},
  rides: {
    type: Number,
    required: true
  },
  facilities: {
    type: Number,
    required: true
  },
  hospitality: {
    type: Number,
    required: true
  },
  services: {
    type: Number,
    required: true
  },
  equivalence: {
    type: Number,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
});


module.exports = mongoose.model("Satisfaction", SatisfactionSchema, "cust_satisfaction");