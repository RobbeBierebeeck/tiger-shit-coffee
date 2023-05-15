import ky from 'ky'
import { KyInstance } from 'ky/distribution/types/ky'
import Cookies from 'universal-cookie'

export const api: KyInstance = ky
    .create({
        prefixUrl: '/api/v1',
    })
    .extend({
        hooks: {
            beforeRequest: [
                (request) => {
                    request.headers.set(
                        'Authorization',
                        `Bearer ${new Cookies().get('token') || ''}`
                    )
                },
            ],
        },
    })
