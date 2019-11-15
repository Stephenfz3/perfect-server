const router = require("express").Router();
const foodController = require("../../controllers/foodController");
const db = require("../../models/");



router.route("/")
  .get(function(req, res) {
    db.FoodPairing
    .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })
  .post(function(req, res) {
    db.FoodPairing
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },);

router
.route("/:id")
      .get(foodController.findById)

  module.exports = router;
