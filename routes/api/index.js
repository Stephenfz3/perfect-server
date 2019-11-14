const router = require("express").Router();
const foodRoutes = require("./food");
;
// // Menu routes
// router.use("/menu", vsRoutes);

// Food Routes
router.use('/foodpage', foodRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

// // Drinks Routes
// router.use("/", drinksRoutes);


module.exports = router;
