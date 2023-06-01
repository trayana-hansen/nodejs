import express from "express";

const postRouter = express.Router();

postRouter.get("/posts", (res, req) => {
  console.log("Get all posts");
});

postRouter.post("/posts", (res, req) => {
  console.log("Make a new post");
});

postRouter.put("/posts", (res, req) => {
  console.log("Update a post");
});

postRouter.delete("/posts", (res, req) => {
  console.log("Delete a post");
});

export { postRouter };
