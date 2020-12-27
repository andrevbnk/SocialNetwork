const db = require("../models");
const User = db.user;
let jwt = require("jsonwebtoken");
const { user } = require("../models");

const profile = (req, res)=>{

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
  const user = req.body.user;
  User.findByIdAndUpdate(req.body.id,{data:user}).exec((err,updUser)=>{
    console.log(updUser);
    res.send({status:true, username:updUser.data.username});
  })
};
module.exports = {profile,editProfileInfo,editProfileSaveInfo};