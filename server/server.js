const express = require("express");
const app = express();  

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const cors = require("cors");

const PORT = process.env.PORT || 3000;

const { authJwt } = require("./auth");
const sendError = require('./errorSend');


const server = app.listen(PORT, function() {
  console.log('server running on port '+PORT);
});

const dbConfig = require('./db.config');
const db = require("./models");
const User = db.user;

//~~~TEST~~~ Decomp on file
const io = require('socket.io')(server,{
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.use( (socket,next)=>{
  const token = socket.handshake.auth.token;
  if (token) {
    if(authJwt.isValidJwt(token)){
      socket.userId = token.id;
      return next();
    }
  }
  return next();
});

io.on('connection', (socket) => {
  console.log('connected socket!');

  socket.on('message',(data,cb)=>{
    User.findByIdAndUpdate(
      data.idProfile,
      {
        $push:{
          'data.messages':{message:data.message,side:true,date:new Date(Date.now())}
        }
      },{new: true})
    .exec((err,user)=>{
      if(err){
        throw new Error("User findByIdAndUpdate Error",err);
      }
      if(user){
        console.log(user);
        socket.user = user.data;
        return cb(socket.user);
      }
      
    });
    
    return false;
  });

});
//~~~TEST~~~ Decomp on file
db.mongoose
  .connect(`mongodb+srv://${dbConfig.HOST}:${dbConfig.PASSWORD}@cluster0.fmmbl.mongodb.net/${dbConfig.DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
//~~~TEST~~~ Decomp on file
let corsOptions = {
  origin: "http://localhost:8080",
  methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
  credentials: true,
};

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
//~~~TEST~~~ Decomp on file
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/profile.routes')(app);

app.use(cors(corsOptions));


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", jsonParser,(req, res) => {
  res.json({ message: "sdsd" });
});

app.use((err, req, res, next) => {
  console.log(err.stack,"err stack");

  res.status(500).json({error: err.stack})
});

















