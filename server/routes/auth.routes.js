const { checkDuplicSignUp } = require("../auth");
const controller = require("../controllers/auth.controller");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

module.exports = function(app) {

  app.post(
    "/api/auth/sign-up",jsonParser,
    checkDuplicSignUp.checkDuplic,
    controller.signup
  );

  app.post("/api/auth/sign-in",jsonParser,controller.signin);
};