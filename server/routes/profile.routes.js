const controller = require("../controllers/profile.controller");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { authJwt } = require("../auth");

module.exports = function(app) {  
  app.get('/api/profile/:id',jsonParser,controller.profile);
  app.post('/api/edit',jsonParser,[authJwt.verifyToken],controller.editProfileInfo);
  app.post('/api/editSave',jsonParser,[authJwt.verifyToken],controller.editProfileSaveInfo);
};