const { checkDuplicSignUp } = require("../auth");
const controller = require("../controllers/auth.controller");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
    );
    res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.set('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.set('Access-Control-Allow-Credentials', 'true');
    next();
  });
  app.post(
    "/api/auth/sign-up",jsonParser,
    checkDuplicSignUp.checkDuplic,
    controller.signup
  );

  app.post("/api/auth/sign-in",jsonParser,controller.signin);
};