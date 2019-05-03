import UserController from "../controllers/UserController";
import { Router } from "express";

const routes = Router();

routes.post("/users", UserController.create);
routes.get("/users", UserController.view);
routes.delete("/users/:id", UserController.remove);
routes.put("/users/:id", UserController.update);

export default routes;
