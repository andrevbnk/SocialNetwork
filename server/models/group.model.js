const mongoose = require("mongoose");

const Group = mongoose.model(
  "Group",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Group;