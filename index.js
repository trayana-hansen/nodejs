import express from "express";
import { postRouter } from "./Routes/post.router.js";
import { productRouter } from "./Routes/products.router.js";
import { artistRouter } from "./Routes/artist.router.js";
import dotenv from "dotenv";

import db from "./Config/mysql.config.js";

// db.query(`SELECT title FROM song `, (err, result) => {
//   console.log(result);
// });
// db.query(
//   `SELECT song.id, song.title, song.content, artist.name FROM song JOIN artist ON song.artist_id = artist.id`,
//   (err, result) => {
//     console.log(result);
//   }
// );

const app = express();
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const port = process.env.PORT;

const api_key = process.env.APIKEY;

app.use(postRouter);
app.use(productRouter);
app.use(artistRouter);

// app.get("/", (req, res) => {
//   res.send("Welcome to my node app!");
// });

// app.get("/products", (req, res) => {
//   res.send("What we offer");
// });

// app.get("/address", (req, res) => {
//   res.send("Where to find us");
// });

// app.get("/contact", (req, res) => {
//   res.send("How to get in touch");
// });

app.listen(4242, () => {
  console.log("The server is running on port 4242: http://localhost:4242/");
});

app.use((req, res, next) => {
  res.status(404).send("The page was not found");
});
