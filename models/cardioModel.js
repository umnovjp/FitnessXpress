const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter cardio here"
      },
    name: {
    type: String,
    trim: true,
    required: "Enter a name for cardio like jogging"
  },
  distance: {
    type: Number,
    required: "Enter distance in miles"
  }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;
