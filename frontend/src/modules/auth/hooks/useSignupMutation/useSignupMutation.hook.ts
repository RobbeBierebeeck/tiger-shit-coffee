import { QueryClient, useMutation } from '@tanstack/react-query'
import { authService } from '~/auth/services'
import { NavigateFunction } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { enqueueSnackbar } from 'notistack'
import { APP_PATHS } from '~/app/app.const'
import Cookies from 'universal-cookie'

export const useSignupMutation = (
    queryClient: QueryClient,
    navigate: NavigateFunction
) =>
    useMutation({
        mutationFn: authService.signup,
        onSuccess: (response) => {
            const cookies = new Cookies()
            cookies.set('token', response.data.token, { path: '/' })
            queryClient.setQueryData(['user'], jwtDecode(response.data.token))
            navigate(APP_PATHS.root)
        },
        onError: () => {
            enqueueSnackbar('Er ging iets fout', { variant: 'error' })
        },
    })
