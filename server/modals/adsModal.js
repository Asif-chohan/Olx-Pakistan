
const mongoose = require("mongoose");


var Schema = mongoose.Schema;
var FavADSchema = mongoose.Schema({
      userid:String,
      adid : String,
    createAt: {type:Date, default: Date.now()}
});



var FavAdModal = mongoose.model('FavAds', FavADSchema);

module.exports = FavAdModal