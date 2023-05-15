import ky from 'ky'
import { KyInstance } from 'ky/distribution/types/ky'

export const api: KyInstance = ky.create({
    prefixUrl: '/api/v1',
})
