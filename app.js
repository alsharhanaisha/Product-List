const express = require("express");
const products = require("./data/data");
const app = express();

const PORT = 8000;

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log("Server is listening");
});
