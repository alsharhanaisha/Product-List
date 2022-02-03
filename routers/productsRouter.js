const express = require("express");
const {
  fetchProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productsController");

const router = express.Router();

router.get("/", fetchProducts);
router.post("/", createProduct);
router.delete("/:productId", deleteProduct);
router.put("/:productId", updateProduct);

module.exports = router;
