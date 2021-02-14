const mongoose = require("mongoose");
const uuidv4 = require('uuid/v4');
const  UUID = mongoose.Types.UUID;

require('mongoose-uuid2')(mongoose);
const validateEmail = function(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const curDate = new Date(Date.now());
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
      firstName:{type:String,trim: true,minlength: 0,maxlength: 15,default:'Андрей'},
      lastName:{type:String,trim: true,minlength: 0,maxlength: 28,default:'Морозов'},
      dataCreated:{type:Date,default:Date.now},
      about:{type:String,trim: true,minlength: 0,maxlength: 255,default:'Ищу работу'},
      age:{type:String,trim: true,minlength: 0,maxlength: 50,default:'19'},
      birthday:{type:Date},
      phone:{type:String,
      default:'0688668756'},
      messages:{type:Array,default:[
        {
          message:'Нас заинтересовала ваше резюме, не хотите пройти собеседование в качестве Front-end/Fullstack developer?',
          side:false,
          date: curDate,
          _id:{ type: UUID, default: uuidv4 }
        },

        {
          message:'Да, готов пройти собеседование в любое время',
          side:true,
          date:curDate,
          _id:{ type: UUID, default: uuidv4 }
        },
        {
          message:'Отлично, приходите в XXX на 12:00',
          side:false,
          date:curDate,
          _id:{ type: UUID, default: uuidv4 }
        },
  
      ]},
      webSite:{type:String,
        default:'',
        maxlength: 115,
      },
      location:{type:String,default:'Киев'},
      socLinks:{type:Array,default:[
        {name:"GitHub",url:"andrevbnk",defaultUrl:"https://github.com/"},
        {name:"Telegram",url:"mor_ozzy",defaultUrl:"https://web.telegram.org/#/im?p=@"},
        {name:"LinkedIn",url:"morozzy",defaultUrl:"https://www.linkedin.com/in/"},
        {name:"Instagram",url:"mor_ozzy",defaultUrl:"https://www.instagram.com/"},
      ]}
    },

  })
);

module.exports = User;