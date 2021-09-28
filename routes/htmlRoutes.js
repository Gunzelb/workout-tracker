const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile("../public/index.html");
});

router.get("/exercise", (req, res) => {
  res.sendFile("../public/exercise");
});

router.get("/stats", (req, res) => {
  res.sendFile("../public/stats.html");
});

module.exports = router;
