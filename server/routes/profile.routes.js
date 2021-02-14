const controller = require("../controllers/profile.controller");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { authJwt } = require("../auth");

module.exports = function(app) {  
  app.get('/api/profile/:id',jsonParser,controller.profile);
  app.post('/api/profile/edit',jsonParser,[authJwt.verifyToken],controller.editProfileInfo);
  app.post('/api/profile/editSave',jsonParser,[authJwt.verifyToken],controller.editProfileSaveInfo);
  app.get('/api/profile/loadMessage/:idProfile',jsonParser,controller.loadMessage);
};