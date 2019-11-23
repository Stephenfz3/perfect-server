const router = require("express").Router();
const foodController = require("../../controllers/foodController");
const db = require("../../models/");


// matches /api/foodPage
router.route("/")
  .get(function (req, res) {
    db.FoodPairing
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })
  .post(function (req, res) {
    db.FoodPairing
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

// matches /api/foodpage/:id
router
  .route("/:id")
  .get(function (req, res) {

    const results = [];

    db.Menu
      .findById(req.params.id)
      .then(dbModel => {
        results.push(dbModel)

        console.log("results 1", results)

        db.Menu.find({})
          .then(data => {

            results.push(data)

            res.send( results )

          })

      })

      .catch(err => res.status(422).json(err))




  })

// foodController.findOne

module.exports = router;
