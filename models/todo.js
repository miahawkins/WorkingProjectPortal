const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  queueTitle: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: {type: String}
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
