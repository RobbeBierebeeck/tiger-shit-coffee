export interface TransactionResponse {
    status: string
    message: string
    data: Transaction
}
export interface Transaction {
    id?: string
    userId: string
    timestamp?: string
    __v?: number
}
