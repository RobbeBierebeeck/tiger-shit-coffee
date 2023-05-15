import { api } from '~/shared/services'
import { User } from './app.service.types'
export class AppService {
    public getUser(): Promise<User> {
        return api.get('auth/me').json()
    }
}
export const appService = new AppService()
