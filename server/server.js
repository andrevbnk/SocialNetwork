const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

const dbConfig = require('./db.config');
const db = require("./models");
const Group = db.Group;
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

let corsOptions = {
  origin: "http://localhost:8080"
};


require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", jsonParser,(req, res) => {
  res.json({ message: "sdsd" });
});

app.use((err, req, res, next) => {
  console.log(err.stack,"err stack");

  res.status(500).json({error: err.stack})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

