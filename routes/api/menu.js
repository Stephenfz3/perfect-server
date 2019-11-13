const router = require("express").Router();
const vsController = require("../../controllers/vsController");
const foodController = require("../../controllers/foodController");

// Matches with "/api/menu"
router.route("/menu")
  .get(vsController.findAll)
  .post(vsController.create);

// Matches with "/api/menu/:id"
router
  .route("/foodPage")
  .get(foodController.findAll)
  .put(foodController.update)
  .delete(foodController.remove);

  router.route("/:subcategories")
  .get(vsController.findAll);

module.exports = router;
