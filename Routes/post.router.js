import express from "express";

const postRouter = express.Router();

postRouter.get("/posts", (res, req) => {
  res.send("Get all posts");
});

postRouter.post("/posts", (res, req) => {
  res.send("Make a new post");
});

postRouter.put("/posts", (res, req) => {
  res.send("Update a post");
});

postRouter.delete("/posts", (res, req) => {
  res.send("Delete a post");
});

export { postRouter };
