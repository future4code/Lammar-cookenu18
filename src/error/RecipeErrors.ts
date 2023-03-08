import { CustomError } from "./CustomError";

export class NotUserToken extends CustomError {
    constructor(){
        super(422, "Informe o token de usuário através do parâmetro 'Authorization'!" )
    }
}

export class UserUnauthorized extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado!")
    }
}

export class NotBody extends CustomError {
    constructor(){
        super(
            422, 
            `Por favor, insira todos os parâmetros corretamente. 
            Parâmetros 'title' e 'description' não foram informados ou estão incorretos!`
        )
    }
}

export class NotTitle extends CustomError {
    constructor(){
        super(
            422, 
            `Por favor, insira todos os parâmetros corretamente. 
            Parâmetro 'title' não foi informado ou está incorreto!`
        )
    }
}

export class NotDescription extends CustomError {
    constructor(){
        super(
            422, 
            `Por favor, insira todos os parâmetros corretamente. 
            Parâmetro 'description' não foi informado ou está incorreto!`
        )
    }
}

export class TitleIsNotString extends CustomError {
    constructor(){
        super(422, "O valor do parâmetro 'title' deve ser do tipo string!")
    }
}

export class DescriptionIsNotString extends CustomError {
    constructor(){
        super(422, "O valor do parâmetro 'description' deve ser do tipo string!")
    }
}

export class NotId extends CustomError {
    constructor(){
        super(422, "Por favor, insira o id da receita que deseja retornar do banco de dados!")
    }
}

export class RecipeNotFound extends CustomError{ 
    constructor(){
        super(404, "Receita não encontrado, por favor verifique o id informado e tente novamente!")
    }
}
