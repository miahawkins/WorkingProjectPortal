const router = require("express").Router();
const todosController = require("../../controllers/todosController");

// Matches with "/api/todos"
router.route("/")
  .get(todosController.findAll)
  .post(todosController.create)
  .put(todosController.update);

// Matches with "/api/todos/:id"
router
  .route("/:id")
  .get(todosController.findById)
  .delete(todosController.remove);

module.exports = router;
