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
            const token = await userBusiness.login(input)

            res.status(200).send({ message: "Login feito com sucesso!", "Token de acesso": token })

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }

    public profile = async ( req: Request, res: Response ): Promise<void> => {
        try {
            const userToken = req.headers.authorization as string

            const userBusiness = new UserBusiness()
            const user = await userBusiness.profile(userToken)

            res.status(200).send({ message: "Usuário autorizado!", user })

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }

    public getOtherUser  = async ( req: Request, res: Response ): Promise<void> => {
        try {
            const userToken = req.headers.authorization as string
            const otherUserId: string = req.params.id

            const userBusiness = new UserBusiness()
            const user = await userBusiness.getOtherUser(userToken, otherUserId)

            res.status(200).send(user)

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}
