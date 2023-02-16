import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO, UserLoginInputDTO } from "../model/User";

export class UserController {

    public signup = async ( req: Request, res: Response ): Promise<void> => {
        try {

            const { name, email, password } = req.body

            const input: UserInputDTO = {
                name,
                email,
                password
            }

            const userBusiness = new UserBusiness()
            const token = await userBusiness.signup(input)

            res.status(201).send({ message: "Novo usuário cadastrado com sucesso!", "Token de acesso": token })
            
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }

    public login = async ( req: Request, res: Response ): Promise<void> => {
        try {
            const { email, password } = req.body;

            const input: UserLoginInputDTO = {
                email,
                password
            }

            const userBusiness = new UserBusiness()
            const {token} = await userBusiness.login(input)

            res.status(200).send({ message: "Login feito com sucesso!", "Token de acesso": token })

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }

}
