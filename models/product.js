const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    default: ""
  },
  video: {
    type: String,
    default: ""
  }, 
  description: {
    type: String,
    default: ""
  },
  coverImage:{
    type: String,
    default: ""
  },
  subImages: {
    type: Array,
    default: ""
  },
  code:{
    type: String,
    default: ""
  },
  sku: {
    type: String,
    default: ""
  },
  price:{
    type: Number, 
    default:0,
  },
  priceSale:{
    type: Number, 
    default:0,
  },
  tags: {
    type:Array,
  },
  inStock: {
    type:Boolean,
    default:true,
  },
  taxes: {
    type:Boolean,
    default:true,
  },
  gender: {
    type: String,
    default: "men"
  },
  category: {
    type:String,
    
  },
  weight: {
    type:Number,
    default:0,
  },
  sizes: {
    type:Array,
    
  },
  colors: {
    type:Boolean,
    default:true,
  },
  state:{
    type:String,
    default:"active",
  },
  updatedAt:{
    type:Date,
    default:Date.now()
  }, 
  seller:{
    type:String
  }
});
module.exports = Product = mongoose.model("product", ProductSchema);