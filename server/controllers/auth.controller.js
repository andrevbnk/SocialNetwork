const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

const signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
        next(err)
    }
    user.save(err => {
        if (err) {
            next(err)
        }

        res.send({ message: "Пользователь зарегистрирован" });
      });
  });
};

const signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .populate("group", "-__g")
    .exec((err, user) => {
        if (err) {
            next(err)
          }

      if (!user) {
        return res.status(404).send({ message: "Пользователь не найден" });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Проверьте пароль"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 часа
      });

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        accessToken: token
      });
    });
};

module.exports = {signin,signup};