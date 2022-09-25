var mongoose = require("mongoose"),
Schema = mongoose.Schema;

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model("Customer", CustomerSchema, "customers");