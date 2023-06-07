import express from "express";
import { artistController } from "../Controllers/artist.controller.js";

const artistRouter = express.Router();

const controller = new artistController();

artistRouter.get("/api/artist", (request, response) => {
  console.log("Artist Route List");
  controller.list(request, response);
});
artistRouter.get("/api/artist/:id([0-9]*)", (request, response) => {
  console.log("Artist Route Details");
  controller.details(request, response);
});
artistRouter.post("/api/artist", (request, response) => {
  console.log("Artist Route Create");
  controller.create(request, response);
});
artistRouter.put("/api/artist", (request, response) => {
  console.log("Artist Route Update");
  controller.update(request, response);
});
artistRouter.delete("/api/artist/:id([0-9]*)", (request, response) => {
  console.log("Artist Route Deleted");
  controller.delete(request, response);
});
export { artistRouter };
