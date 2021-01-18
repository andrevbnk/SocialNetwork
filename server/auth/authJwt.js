const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const sendError = require('../errorSend');

const isValidJwt = (token)=>{
  let secret = config.secret;
  return jwt.verify(token,secret,(err, decoded) => {
    if(err){
      return false
    }
    return decoded;
  });
}

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    sendError(res,401);
  }
  let decoded = isValidJwt(token);
  if(!decoded){
    sendError(res,401);
  }
  
  req.userId = decoded.id;
  next();  
};

const authJwt = {
  verifyToken,
  isValidJwt,
};
module.exports = authJwt;
