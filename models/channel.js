const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ChannelSchema = new Schema({
  channelName:{
    type:String,
  },
  channelDescription:{
    type:String,
  },
  channelAvatar:{
    type:String,
    default:"/images/channel/avatar/default.png"
  },
  channelCover:{
    type:String,
    default:"/images/channel/cover/default.png"
  },
  creator:{
    type:String,
  },
  status:{
    type:Number,
    default:1,
  },
  created:{
    type:Date,
    default:Date.now
  }

});
module.exports = Channel = mongoose.model("channel", ChannelSchema);