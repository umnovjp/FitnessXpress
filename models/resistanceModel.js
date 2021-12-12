const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter resistance here"
      },
    name: {
    type: String,
    trim: true,
    required: "Enter a name for resistance"
  },
  duration: {
    type: Number,
    required: "Enter duration in minutes"
  },
  weight: {
    type: Number,
    required: "Enter weight in pounds"
  },
  reps: {
    type: Number,
    required: "Enter number of reps"
  },
  sets: {
    type: Number,
    required: "Enter number of sets"
  }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;
