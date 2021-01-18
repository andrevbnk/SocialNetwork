const mongoose = require("mongoose");
var uuidv4 = require('uuid/v4');

require('mongoose-uuid2')(mongoose);
const  UUID = mongoose.Types.UUID;
const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: {type:String,required: "Email нужнен для регистрации",trim: true,unique: true,
    validate: [validateEmail, 'Введите правильный email'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Введите правильный email']
    },
    online: { type: Boolean, default: false },
    password: {type:String,required: "Пароль нужен для регистрации",trim: true,minlength: 3},
    data:{
      img:{type:String,default:"https://cdn3.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-5/24/2097-512.png"},
      username: {type:String,trim: true,minlength: 2,maxlength: 15},
      firstName:{type:String,trim: true,minlength: 0,maxlength: 15},
      lastName:{type:String,trim: true,minlength: 0,maxlength: 28},
      dataCreated:{type:Date,default:Date.now},
      about:{type:String,trim: true,minlength: 0,maxlength: 255},
      age:{type:String,trim: true,minlength: 0,maxlength: 50},
      birthday:{type:Date},
      phone:{type:String,
      validate: {
        validator: function(v) {
          return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} невалидный телефон!`
      }},
      webSite:{type:String,
        validate: {
          validator: function(v) {
            return /^((http|https|ftp):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i.test(v);
          },
          message: props => `${props.value} неверный url!`
        },
      
      },
      location:{type:String},
      socLinks:{type:Array,default:[
        {name:"Facebook",url:"",defaultUrl:"https://www.facebook.com/"},
        {name:"Instagram",url:"",defaultUrl:"https://www.instagram.com/"},
        {name:"LinkedIn",url:"",defaultUrl:"https://www.linkedin.com/in/"},
        {name:"Google+",url:"",defaultUrl:"https://www.googleplus.com/"},
      ]}
    },
    room: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
    Group: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
      }
    ]
  })
);

module.exports = User;