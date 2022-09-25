var mongoose = require("mongoose"),
Schema = mongoose.Schema;

const VisitSchema = new mongoose.Schema({
  owner: {type: Schema.Types.ObjectId, ref: 'Customer'},
  frequency: {
    type: Number,
    required: true
  },
  referal: {
    type: Number,
    required: true
  },
  isRecomended: {
    type: Number,
    required: true
  },
  notes: {
    type: String,
  },
});


module.exports = mongoose.model("Visit", VisitSchema, "cust_visit");