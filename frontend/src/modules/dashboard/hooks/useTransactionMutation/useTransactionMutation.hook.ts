import { useMutation } from '@tanstack/react-query'
import { dashboardService } from '~/dashboard/services/dashboard/'
import { enqueueSnackbar } from 'notistack'

export const useTransactionMutation = () =>
    useMutation({
        mutationFn: dashboardService.createTransaction,
        retry: false,
        onSuccess: () => {
            enqueueSnackbar('Je koffie is besteld', {
                variant: 'success',
            })
        },
        onError: () => {
            enqueueSnackbar(
                'Er is iets misgegaan de machine is waarschijnlijk te druk, probeer later opnieuw',
                {
                    variant: 'error',
                }
            )
        },
    })
