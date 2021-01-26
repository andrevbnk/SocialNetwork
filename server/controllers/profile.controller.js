const db = require("../models");
const User = db.user;
const Room = db.room;
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
        _id: req.userId
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
  User.findByIdAndUpdate(req.userId,{data:user}).exec((err,updUser)=>{
    res.send({status:true, username:user.username});
  })
};

const loadMessage = (req,res)=>{
  const idProfile = req.params.idProfile;
  Room.findOne({users:idProfile,users:req.userId}).exec((err,room)=>{
    res.send({status:true, room:room});
  });

}
module.exports = {profile,editProfileInfo,editProfileSaveInfo,loadMessage};