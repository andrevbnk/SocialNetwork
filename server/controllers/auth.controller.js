const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;


let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

const signup = (req, res) => {
  const datauser = new User({
    email: req.body.email,
    data:{
      username: req.body.email.split("@")[0],
    },
    password: bcrypt.hashSync(req.body.password, 8)
  });
  User.findOne({
    email: req.body.email
  })
  .exec((err, user) => {
      if (err) {
            next(err)
          }
      if (user) {
        return res.send({ message: "Пользователь уже зарегистрирован",status:false });
      }
      datauser.save((err, user) => {
        if (err) {
          console.log(err);
            next(err)
        }
        return res.send({ message: "Пользователь зарегистрирован",status:true });
        
      });
    });

}

const signin = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .populate("group", "-__g")
    .exec((err, user) => {
        if (err) {
            next(err)
          }
      if (!user) {
        return res.send({ message: "Пользователь не найден",status:false,statusCode:"400"});
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.send({
          accessToken: null,
          message: "Проверьте пароль",
          status:false,
          statusCode:"401",
        });
      }
      const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // 24 часа
      });

      res.status(200).send({
        id: user._id,
        username: user.data.username,
        accessToken: token,
        img: user.data.img,
      });
    });
};

module.exports = {signin,signup};