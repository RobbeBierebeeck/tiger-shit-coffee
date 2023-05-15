import { useQuery } from '@tanstack/react-query'
import { APP_QUERY_KEYS } from '~/app/services/app/app.const'
import { appService } from '~/app/services'

export const useUser = () =>
    useQuery({
        queryKey: APP_QUERY_KEYS.user,
        queryFn: () => appService.getUser(),
        retry: false,
        retryOnMount: false,
    })
