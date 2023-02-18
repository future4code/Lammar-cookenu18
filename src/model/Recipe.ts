export interface Recipe {
    id: string,
    title: string,
    description: string,
    authorId: string
}

export interface RecipeInputDTO {
    title: string,
    description: string
}

export interface RecipeOutput {
    id: string,
    title: string,
    description: string,
    createAT: Date
}
