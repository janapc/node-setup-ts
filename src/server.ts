import express from "express";
import UserController from "@controllers/UserController";

const app = express();
const userController = new UserController();

app.get("/", userController.index);

app.listen(3333);
