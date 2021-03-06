const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  day: {
    type: Date,
    trim: true,
    required: true,
  },
  exercises: [
    {
      type: { type: String },
      name: String,
      distance: Number,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],

  lastUpdated: Date,
});

ExerciseSchema.methods.lastUpdatedDate = function () {
  this.lastUpdated = Date.now();

  return this.lastUpdated;
};

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
