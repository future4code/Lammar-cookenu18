import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { User, UserInputDTO, UserLoginInputDTO } from "../model/User";
import { generateId } from "../services/idGenerator";
import { Authenticator } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { 
    NotBody, 
    NotName, 
    NotEmail, 
    NotPassword, 
    NameIsNotString, 
    EmailIsNotString, 
    PasswordIsNotString,
    InvalidEmail, 
    InvalidPassword, 
    PasswordNoSpaces,
    RegisteredUser,
    UserNotFound,
    NotBodyLogin,
    InvalidPasswordLogin
} from "../error/UserErrors";

export class UserBusiness {
    
    public signup = async ( input: UserInputDTO ): Promise<string> => {
        try {

            const id: string = generateId()
            const { name, email, password } = input
            
            if ( !name && !email && !password ) {
               throw new NotBody() 
            }

            if (!name) {
                throw new NotName()
            }
    
            if (!email) {
                throw new NotEmail()
            }

            if (!password) {
                throw new NotPassword()
            }
    
            if (typeof name !== "string") {
                throw new NameIsNotString()
            }
    
            if (typeof email !== "string") {
                throw new EmailIsNotString()
            }
    
            if (typeof password !== "string") {
                throw new PasswordIsNotString()
            }

            if(!email.includes("@")) {
                throw new InvalidEmail()
            }

            if(password.length < 8) {
                throw new InvalidPassword()
            }

            if (password.includes(" ") === true) {
                throw new PasswordNoSpaces()
            }

            const userDatabase = new UserDatabase()
            const registeredEmail = await userDatabase.getUserByEmail(email)
        
            if (registeredEmail) {
                throw new RegisteredUser()
            }

            const hashManager = new HashManager()
            const hashPassword: string = await hashManager.generateHash(password)
            
            const user: User = {
                id,
                name,
                email,
                password: hashPassword
            }

            await userDatabase.insertUser(user)

            const authenticator = new Authenticator()
            const token =  authenticator.generateToken({id})
            
            return token
  
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    login = async ( input: UserLoginInputDTO ) => {
        try {
            
            const { email, password } = input

            if ( !email && !password ) {
               throw new NotBodyLogin() 
            }

            if(!email.includes("@")) {
                throw new InvalidEmail()
            }

            if(password.length < 8) {
                throw new InvalidPassword()
            }

            const userDatabase = new UserDatabase()
            const userOutput = await userDatabase.getUserByEmail(email)

            if(!userOutput) {
              throw new UserNotFound()
            }

            const hashManager = new HashManager()
            const compareResult: boolean = await hashManager.compareHash(password, userOutput.password);

            if(!compareResult) {
              throw new InvalidPasswordLogin()
            }

            const authenticator = new Authenticator()
            const token =  authenticator.generateToken({id: userOutput.id})

            return {token}

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}
