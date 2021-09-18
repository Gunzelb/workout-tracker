const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Exercise({
  day: {
    type: String,
    trim: true,
    required: true,
  },
  exercises: {
    type: Array,
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
