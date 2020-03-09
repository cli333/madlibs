const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MadlibSchema = new Schema(
  {
    data: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Madlib = mongoose.model("Madlib", MadlibSchema);

module.exports = Madlib;
