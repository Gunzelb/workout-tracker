const router = require("express").Router();
const User = require("../models/User");
const Exercise = require("../models/Exercise");

router.get("/workouts", (req, res) => {
  Exercise.find({})
    .sort({ day: -1 })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/workouts", ({ body }, res) => {
  Exercise.create(body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.json(err).status(400);
    });
});

router.put("/workouts:id", (req, res) => {
  const filter = req.params.id;
  const update = req.body;

  Exercise.findOneAndUpdate(filter, update)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Exercise.findAll({})
    .sort({ day: -1 })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
