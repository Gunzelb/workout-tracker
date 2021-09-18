const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Exercise({
  day: {
    type: Date,
    trim: true,
    required: true,
  },
  exercises: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
