const express = require("express");
// let products = require("./data/data");
const homeRouter = require("./routers/homeRouter");
const connectDB = require("./db/database");
const app = express();

app.use(express.json());

app.use("/", homeRouter);

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  //cannot add status
  const {
    id,
    name,
    slug,
    image,
    description,
    color,
    quantity,
    price,
  } = req.body;
  const chicken = {
    id,
    name,
    slug,
    image,
    description,
    color,
    quantity,
    price,
  };
  res.status(201).json({ msg: "A Chicken Product is Created", chicken });
});

app.delete("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => product.id === +productId);
  if (foundProduct) {
    products = products.filter((product) => +product.id !== +productId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Cookie not found" });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is listening");
  connectDB();
});
