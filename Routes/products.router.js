import express from "express";

const productRouter = express.Router();

productRouter.get("/products", (res, req) => {
  console.log("Get all products");
});

productRouter.post("/products", (res, req) => {
  console.log("Add a new product");
});

productRouter.put("/products", (res, req) => {
  console.log("Update product information");
});

productRouter.delete("/products", (res, req) => {
  console.log("Delete a product");
});

export { productRouter };
