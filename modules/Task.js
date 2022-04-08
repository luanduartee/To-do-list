const { builtinModules } = require("module");
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  check: {
    type: Boolean,
    require: true,
  },
  date: {
    type: Date,
    defaut: Date.now(),
  },
});

module.exports = mongoose.model("Task", taskSchema);