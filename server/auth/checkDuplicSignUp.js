const db = require("../models");
const User = db.user;

const checkDuplic = (req, res, next) => {
  User.findOne({//Проверка username
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Такой пользователь уже зарегистрирована." });
      return;
    }

    User.findOne({//Проверка email
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Такая почта уже зарегистрирована" });
        return;
      }

      next();
    });
  });
};

const verifyAuth = {
    checkDuplic,
};

module.exports = verifyAuth;