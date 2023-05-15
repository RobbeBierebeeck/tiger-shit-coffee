import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from '~/app/app.routes'
import { SnackbarProvider } from 'notistack'

const queryClient = new QueryClient()

export const Root: FC = () => {
    return (
        <SnackbarProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </SnackbarProvider>
    )
}
