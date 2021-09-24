const router = require("express").Router();

const apiRoutes = require("./api.js");
const htmlRoutes = require("./htmlRoutes.js");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;
