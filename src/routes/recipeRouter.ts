import { RecipeController } from './../controller/RecipeController';
import express from "express";

export const recipeRouter = express.Router()

const recipeController = new RecipeController()

recipeRouter.post("/create", recipeController.createRecipe)
