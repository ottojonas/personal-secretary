const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {},
  name: String,
  jobTitle: String,
});

module.exports = mongoose.model("User", userSchema);

