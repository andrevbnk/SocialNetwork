const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {type:String,default:false},
    email: String,
    password: String,
    Group: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
      }
    ]
  })
);

module.exports = User;