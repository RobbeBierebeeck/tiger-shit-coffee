import { QueryClient, useMutation } from '@tanstack/react-query'
import { authService } from '~/auth/services'
import { NavigateFunction } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { enqueueSnackbar } from 'notistack'
import { APP_PATHS } from '~/app/app.const'

export const useSignupMutation = (
    queryClient: QueryClient,
    navigate: NavigateFunction
) =>
    useMutation({
        mutationFn: authService.signup,
        onSuccess: (response) => {
            document.cookie = `token=${response.data.token}`
            queryClient.setQueryData(['user'], jwtDecode(response.data.token))
            navigate(APP_PATHS.root)
        },
        onError: () => {
            enqueueSnackbar('Er ging iets fout', { variant: 'error' })
        },
    })
