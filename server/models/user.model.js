const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: String,
    password: String,
    data:{
      img:{type:String,default:"https://cdn3.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-5/24/2097-512.png"},
      username: {type:String,default:''},
      firstName:{type:String,default:''},
      lastName:{type:String,default:''},
      personalId:{type:String,default:''},
      about:{type:String,default:''},
      age:{type:String,default:''},
      sex:{type:String,default:'Не указан'},
      location:{type:String,default:'Не указан'}
    },
    Group: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
      }
    ]
  })
);

module.exports = User;