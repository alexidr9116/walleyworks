const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const StoreSchema = new Schema({
  name: {
    type: String,
    default: ""
  },
  description:{
    type:String,
  },

  video: {
    type: String,
    default: ""
  }, 
  coverImage:{
    type: String,
    default: ""
  },
  avatarImage:{
    type:String,
    default:"",
  },
  adminName:{
    type:String,
    default:""
  },
  adsImages:{ // includes image, id, description,
    type:Array,
    
  },
  adsProducts:{ // includes image-id, product-id,
    type:Array,
  },
  phoneNumber:{
    type:String,
  },
  country:{
    type:String,
  },
  address:{
    type:String,
  },
  city:{
    type:String,
  },
  contact:{
    type:String,
  },
  state:{
    type:String,
    default:"active",
  },
  updatedAt:{
    type:Date,
    default:Date.now()
  }, 
  creator:{
    type:String
  }
});
module.exports = Storefront = mongoose.model("storefront", StoreSchema);