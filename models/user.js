const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type:String,
    default:"/images/avatar/avatar_1.jpg"
  },
  date: {
    type: Date,
    default: Date.now
  },
  birthday:{
    type:Date,
  },
  gender:{
    type:Number,
    default:0,
  },
  address:{
    type:String,
  },
  country:{
    type:String,
  },
  role:{
    type:String,
    default:"customer",
  },
  state:{
    type:String,
  },
  zipCode:{
    type:String,
  },
  status:{
    type:Number,
    default:0,
  },
  about:{
    type:String,
  },
  address:{
    type:String,
  },
  city:{
    type:String,
  },
  phoneNumber1:{
    type:String,
  },
  phoneNumber2:{
    type:String,
  },
  socialLink:{
    type:Object,
    facebookLink:{
      type:String,
      default:""
    },
    twitterLink:{
      type:String,
      default:""
    },
    instagramLink:{
      type:String,
      default:""
    },
    linkedinLink:{
      type:String,
      default:""
    }

  }
});
module.exports = User = mongoose.model("user", UserSchema);