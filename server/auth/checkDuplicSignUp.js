const db = require("../models");
const User = db.user;

const checkDuplic = (req, res, next) => {
  User.findOne({//Проверка email
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      res.send({ message: err,status:false,statusCode:"500" });
      return;
    }

    if (user) {
      res.send({ message: "Такой пользователь уже зарегистрирована.",status:false,statusCode:"400" });
      return;
    }

    User.findOne({//Проверка email
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.send({ message: err,status:false,statusCode:"500" });
        return;
      }

      if (user) {
        res.send({ message: "Такая почта уже зарегистрирована",status:false,statusCode:"400" });
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