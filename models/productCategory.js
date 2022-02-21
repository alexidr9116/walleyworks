const mongoose = require("mongoose");
const ObjectId =  require("mongoose").Types.ObjectId;
const Schema = mongoose.Schema;
// Create Schema
const ProductCategorySchema = new Schema({
  level:{
    type:Number,
    default:1,
  },
  classify: {
    type: String,
    default: ""
  }, 
  description: {
    type: String,
    default: ""
  },
  group:{
    type:String,
    
  },
  state:{
    type:String,
    default:"active",
  },
  key:{
    type:String,
    default:(new ObjectId()+"")
  },
});
module.exports = ProductCategory = mongoose.model("productCategory", ProductCategorySchema);