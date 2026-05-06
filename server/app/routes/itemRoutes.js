const express = require("express");
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

const router = express.Router();

router.route("/").get(getAllItems).post(createItem);
router.route("/:id").get(getItemById).put(updateItem).delete(deleteItem);

module.exports = router;
