import { RecipeDatabase } from "../data/RecipeDatabase";
import { CustomError } from "../error/CustomError";
import { Recipe, RecipeInputDTO, RecipeOutput } from "../model/Recipe";
import { generateId } from "../services/idGenerator";
import { Authenticator } from "../services/authenticator";
import { 
    NotUserToken,
    NotBody,
    NotTitle,
    NotDescription,
    TitleIsNotString,
    DescriptionIsNotString,
    NotId,
    RecipeNotFound
} from "../error/RecipeErrors";

export class RecipeBusiness {
    
    public createRecipe = async ( input: RecipeInputDTO, userToken: string ): Promise<void> => {
        try {

            const id: string = generateId()
            const { title, description } = input
            
            if ( !title && !description ) {
               throw new NotBody() 
            }

            if (!title) {
                throw new NotTitle()
            }
    
            if (!description) {
                throw new NotDescription()
            }
    
            if (typeof title !== "string") {
                throw new TitleIsNotString()
            }
    
            if (typeof description !== "string") {
                throw new DescriptionIsNotString()
            }

            if ( !userToken ) {
                throw new NotUserToken()
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenData(userToken).id

            const recipe: Recipe = {
                id,
                title,
                description,
                authorId: payload
            }

            const userDatabase = new RecipeDatabase()
            await userDatabase.insertRecipe(recipe)
  
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

}
