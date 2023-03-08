export interface User {
    id: string,
    name: string,
    email: string,
    password: string
}

export interface UserInputDTO {
    name: string,
    email: string,
    password: string
}

export interface UserLoginInputDTO {
    email: string,
    password: string
}

export interface UserOutput {
    id: string,
    name: string,
    email: string
}
