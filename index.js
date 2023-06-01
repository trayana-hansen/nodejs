import express from "express";
import { postRouter } from "./Routes/post.router.js";
import { productRouter } from "./Routes/products.router.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT;

const api_key = process.env.APIKEY;

app.get("/", (req, res) => {
  res.send("Welcome to my node app!");
});

app.use(postRouter);
app.use(productRouter);

app.get("/products", (req, res) => {
  res.send("What we offer");
});

app.get("/address", (req, res) => {
  res.send("Where to find us");
});

app.get("/contact", (req, res) => {
  res.send("How to get in touch");
});

app.listen(4242, () => {
  console.log("The server is running on port 4242: http://localhost:4242/");
});

app.use((req, res, next) => {
  res.status(404).send("The page was not found");
});
