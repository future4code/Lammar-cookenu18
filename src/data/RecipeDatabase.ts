import { BaseDatabase } from "./BaseDatabeas";
import { CustomError } from "../error/CustomError";
import { Recipe } from "../model/Recipe";

export class RecipeDatabase extends BaseDatabase {

    public insertRecipe = async ( recipe: Recipe ): Promise<void> => {
        try {

            await RecipeDatabase.connection.raw(`
                INSERT INTO cookenu_recipes (id, title, description, author_id)
                VALUES(
                    "${recipe.id}", 
                    "${recipe.title}", 
                    "${recipe.description}", 
                    "${recipe.authorId}" 
                );
            `)
            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

    public getRecipeById = async ( id: string ): Promise<Recipe> => {
        try {

            const result = await RecipeDatabase.connection.raw(`
                SELECT * FROM cookenu_recipes
                WHERE id LIKE "%${id}";
            `)

            return result[0][0]
            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

}
