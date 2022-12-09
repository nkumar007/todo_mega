const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      unique: [true, "Title should be unique"],
    },
    tasks: [String],
  },
  { timestamps: true }
);
todoSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Todo", todoSchema);
