const { checkDuplicSignUp } = require("../auth");
const controller = require("../controllers/auth.controller");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/auth/signup",jsonParser,
    checkDuplicSignUp.checkDuplic,
    controller.signup
  );

  app.post("/api/auth/signin",jsonParser,controller.signin);
};