import { QueryClient, useMutation } from '@tanstack/react-query'
import { authService } from '~/auth/services'
import { NavigateFunction } from 'react-router-dom'
import { APP_PATHS } from '~/app/app.const'
import jwtDecode from 'jwt-decode'
import { enqueueSnackbar } from 'notistack'

export const useLoginMutation = (
    queryClient: QueryClient,
    navigate: NavigateFunction
) =>
    useMutation({
        mutationFn: authService.login,
        onSuccess: (response) => {
            document.cookie = `token=${response.data.token}`
            queryClient.setQueryData(['user'], jwtDecode(response.data.token))
            navigate(APP_PATHS.root)
        },
        onError: () => {
            enqueueSnackbar('Er ging iets fout', { variant: 'error' })
        },
    })
