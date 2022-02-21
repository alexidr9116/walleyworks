const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ProductSizeSchema = new Schema({
  
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
module.exports = ProductSize = mongoose.model("productSize", ProductSizeSchema);