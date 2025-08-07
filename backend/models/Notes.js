const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  userId: {},
  title: {},
  content: String,
  dateCreated: Date,
});

module.exports = mongoose.model("Note", notesSchema);
