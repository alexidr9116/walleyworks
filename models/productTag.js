const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ProductTagSchema = new Schema({
  
  name: {
    type: String,
    default: ""
  }, 
  description: {
    type: String,
    default: ""
  },
  state:{
    type:String,
    default:"active",
  }
});
module.exports = ProductTag = mongoose.model("productTag", ProductTagSchema);