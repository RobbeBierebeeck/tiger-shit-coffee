import { api } from '~/shared/services'
import { SignupResponse, SignupUser } from './auth.service.types'

export class AuthService {
    public signup(body: SignupUser): Promise<SignupResponse> {
        return api.post('auth/signup', { json: body }).json()
    }
}
export const authService = new AuthService()
