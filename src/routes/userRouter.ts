import { UserController } from './../controller/UserController';
import express from "express";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/signup", userController.signup)

userRouter.post("/login", userController.login)

userRouter.get("/profile", userController.profile)
