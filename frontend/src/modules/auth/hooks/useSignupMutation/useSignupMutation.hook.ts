import { QueryClient, useMutation } from '@tanstack/react-query'
import { authService } from '~/auth/services'
import { NavigateFunction } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'

export const useSignupMutation = (
    queryClient: QueryClient,
    navigate: NavigateFunction
) =>
    useMutation({
        mutationFn: authService.signup,
        onSuccess: (response) => {
            console.log(response)
            queryClient.setQueryData(['user'], response)
            navigate('/dashboard')
        },
        onError: () => {
            enqueueSnackbar('Er ging iets fout', { variant: 'error' })
        },
    })
