const router = require("express").Router();
const vsRoutes = require("./menu");

// Menu routes
router.use("/menu", vsRoutes);

module.exports = router;
