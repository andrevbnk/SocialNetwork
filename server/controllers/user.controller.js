const db = require("../models");
const User = db.user;

const allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
const userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };


const allUser = (req, res) => {
  User.find({})    
  .select("-password")
  .exec((err,allUser)=>{
    res.send({allUser:allUser,status:true})
  });
}

module.exports = {allAccess,userBoard,allUser};