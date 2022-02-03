const express = require("express");
let products = require("./data/data");
const homeRouter = require("./routers/homeRouter");
const productsRouter = require("./routers/productsRouter");
const connectDB = require("./db/database");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/", homeRouter);
app.use("/api/products", productsRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is listening");
  connectDB();
});
