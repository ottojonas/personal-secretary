const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  uesrId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  completed: { type: Boolean, default: false },
});

mongoose.exports = mongoose.model("Task", taskSchema);
