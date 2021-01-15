const controller = require("../controllers/profile.controller");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { authJwt } = require("../auth");

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
  
  app.get('/api/profile/:id',jsonParser,controller.profile);
  app.post('/api/edit',jsonParser,[authJwt.verifyToken],controller.editProfileInfo);
  app.post('/api/editSave',jsonParser,[authJwt.verifyToken],controller.editProfileSaveInfo);
};