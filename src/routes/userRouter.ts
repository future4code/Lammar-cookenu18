import { UserController } from './../controller/UserController';
import express from "express";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/signup", userController.signup)
