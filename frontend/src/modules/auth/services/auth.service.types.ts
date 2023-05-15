export interface SignupResponse {
    status: string
    message: string
    data: {
        token: string
    }
}

export interface AuthUser {
    email: string
    password: string
}
