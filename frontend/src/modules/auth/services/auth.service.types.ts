export interface SignupResponse {
    status: string
    message: string
    data: {
        token: string
    }
}

export interface SignupUser {
    email: string
    password: string
}
