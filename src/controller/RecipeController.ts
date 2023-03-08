import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeInputDTO } from "../model/Recipe";

export class RecipeController {

    public createRecipe = async ( req: Request, res: Response ): Promise<void> => {
        try {

            const userToken = req.headers.authorization as string
            const { title, description } = req.body

            const input: RecipeInputDTO = {
                title,
                description
            }

            const recipeBusiness = new RecipeBusiness()
            await recipeBusiness.createRecipe(input, userToken)

            res.status(201).send({ message: "Nova receita criada com sucesso"})
            
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }

    public getRecipeById  = async ( req: Request, res: Response ): Promise<void> => {
        try {
            const userToken = req.headers.authorization as string
            const recipeId: string = req.params.id

            const recipeBusiness = new RecipeBusiness()
            const recipe = await recipeBusiness.getRecipeById(userToken, recipeId)

            res.status(200).send(recipe)

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}
