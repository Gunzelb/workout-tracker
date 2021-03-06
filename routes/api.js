const router = require("express").Router();
const User = require("../models/User");
const Exercise = require("../models/Exercise");

router.get("/workouts", async (req, res) => {
  try {
    const workouts = await Exercise.find({}).sort({ day: +1 });

    if (workouts) {
      const result = await Exercise.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: "$exercises.duration",
            },
          },
        },
      ]);
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/workouts", (req, res) => {
  console.log(req.body);
  const newExercise = {
    day: new Date(),
    exercise: [],
  };
  Exercise.create(newExercise)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err).status(400);
    });
});

router.put("/workouts/:id", (req, res) => {
  const filter = { _id: req.params.id };
  console.log(req.body);
  const update = { $push: { exercises: req.body } };

  Exercise.findByIdAndUpdate(filter, update)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get("/workouts/range", async (req, res) => {
  try {
    const workouts = await Exercise.find({}).sort({ day: +1 });

    if (workouts) {
      const result = await Exercise.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: "$exercises.duration",
            },
          },
        },
      ]);
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
