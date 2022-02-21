const mongoose = require("mongoose");
const ObjectId =  require("mongoose").Types.ObjectId;
const Schema = mongoose.Schema;
// Create Schema
const ProductUserCategorySchema = new Schema({
  user:{
    type:String,
  },
  key:{
    type:String,
    default:(new ObjectId()+"")
  },
  classify: {
    type: String,
    default: ""
  },
  categories:{
    type:Array,
  },
  description: {
    type: String,
    default: ""
  },
  
});
module.exports = ProductUserCategory = mongoose.model("productUserCategory", ProductUserCategorySchema);