const db = require("../models");
const User = db.user;
let jwt = require("jsonwebtoken");
const { user } = require("../models");

const profile = (req, res)=>{
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.send({ message: "Введите корректный id пользователя",status:false });
  }
  User.findById({
        _id: req.params.id
      })
    .select("-password")    
    .exec((err,user)=>{
        if (err) {
            console.log(err);
        }
        if (!user) {
        return res.send({ message: "Пользователь не найден",status:false });
        }
        return res.send({user:user,status:true});
      });
};

const editProfileInfo = (req,res)=>{
  if (!req.body.id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.send({ message: "Введите корректный id пользователя",status:false });
  }

  User.findById({
        _id: req.body.id
      })
    .select("-password")
    .exec((err,user)=>{
        if (err) {
            console.log(err);
        }
        if (!user) {
        return res.send({ message: "Пользователь не найден",status:false });
        }
        return res.send({user:user,status:true});
      });
}


const editProfileSaveInfo = (req,res)=>{
  console.log(req.body,"post");
  const user = req.body.user;
  User.findByIdAndUpdate(req.body.id,{data:user}).exec((err,updUser)=>{
    res.send({status:true});
  })
};
module.exports = {profile,editProfileInfo,editProfileSaveInfo};