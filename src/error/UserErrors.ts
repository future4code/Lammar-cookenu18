import { CustomError } from "./CustomError";

export class UserUnauthorized extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado!")
    }
}