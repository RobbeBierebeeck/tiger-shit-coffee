import { api } from '~/shared/services'
import { SignupResponse, AuthUser } from './auth.service.types'

export class AuthService {
    public signup(body: AuthUser): Promise<SignupResponse> {
        return api.post('auth/signup', { json: body }).json()
    }

    public login(body: AuthUser): Promise<SignupResponse> {
        return api.post('auth/login', { json: body }).json()
    }
}
export const authService = new AuthService()
