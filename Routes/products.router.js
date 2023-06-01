import express from "express";

const productRouter = express.Router();

productRouter.get("/products", (req, res) => {
  res.send("Get all products");
});

productRouter.post("/products", (req, res) => {
  res.send("Add a new product");
});

productRouter.put("/products", (req, res) => {
  res.send("Update product information");
});

productRouter.delete("/products", (req, res) => {
  res.send("Delete a product");
});

export { productRouter };
