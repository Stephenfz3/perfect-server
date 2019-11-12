const router = require("express").Router();
const vsController = require("../../controllers/vsController");

// Matches with "/api/menu"
router.route("/categories")
  .get(vsController.findAll)
  .post(vsController.create);

// Matches with "/api/menu/:id"
router
  .route("/categories/subcategories/:subcategories")
  .get(vsController.findAll)
  .put(vsController.update)
  .delete(vsController.remove);

  router.route("/:subcategories")
  .get(vsController.findAll);

module.exports = router;
