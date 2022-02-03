const { findByIdAndDelete, findById } = require("../models/Product");
const Product = require("../models/Product");

exports.fetchProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  const product = req.body;
  try {
    const newProduct = await Product.create(product);
    res.status(201).json({ msg: "A Chicken Product is Created", newProduct });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const foundProduct = await Product.findByIdAndDelete(productId);
    if (foundProduct) {
      res.status(204).end();
    } else {
      res.status(404).json({ msg: "Cookie not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  const { productId } = req.params;
  const product = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, product);
    if (updatedProduct) {
      res.status(200).json({
        msg: "Updated successfully",
        payload: product,
      });
    } else {
      res.status(404).json({
        msg: "Product Not Found",
      });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
