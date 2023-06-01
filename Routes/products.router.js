import express from "express";

const productRouter = express.Router();

productRouter.get("/products", (res, req) => {
  res.send("Get all products");
});

productRouter.post("/products", (res, req) => {
  res.send("Add a new product");
});

productRouter.put("/products", (res, req) => {
  res.send("Update product information");
});

productRouter.delete("/products", (res, req) => {
  res.send("Delete a product");
});

export { productRouter };
