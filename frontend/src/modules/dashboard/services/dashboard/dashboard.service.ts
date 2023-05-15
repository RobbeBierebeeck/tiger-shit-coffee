import { api } from '~/shared/services'
import { Transaction, TransactionResponse } from './dashboard.service.types'
export class DashboardService {
    public createTransaction(body: Transaction): Promise<TransactionResponse> {
        return api.post('transactions', { json: body }).json()
    }
}
export const dashboardService = new DashboardService()
