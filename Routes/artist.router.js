import express from "express";
import { artistController } from "../Controllers/artist.controller.js";

const artistRouter = express.Router();

const controller = new artistController();

artistRouter.get("/api/artist", (request, response) => {
  return controller.list(request, response);
});
artistRouter.get("/api/artist/:id([0-9]*)", (request, response) => {
  return controller.details(request, response);
});
artistRouter.post("/api/artist", (request, response) => {
  return controller.create(request, response);
});
artistRouter.put("/api/artist", (request, response) => {
  return controller.update(request, response);
});
artistRouter.delete("/api/artist/:id([0-9]*)", (request, response) => {
  return controller.delete(request, response);
});
export { artistRouter };
