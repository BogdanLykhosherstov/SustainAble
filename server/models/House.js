const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
  community: String,
  address: String,
  sq_footage:{
      above_grade:String,
      below_grade:String,
      garage:String
  },
  history:{
      external_temp:String,
      internal_temp:String,
      heat_lost:String
  }

});

module.exports = mongoose.model('House', HouseSchema);
