import React, { FC, useEffect } from 'react'
import { Outlet, useMatch, useNavigate } from 'react-router-dom'
import { useUser } from '~/app/hooks'
import { AUTH_PATHS } from '~/auth/auth.const'
import { APP_PATHS } from '~/app/app.const'
import { DASHBOARD_PATHS } from '~/dashboard/dashboard.const'

export const App: FC = () => {
    const isRoot = useMatch(APP_PATHS.root)

    const navigate = useNavigate()

    const { isError: unauthenticated, isFetching: isLoadingUser } = useUser()

    useEffect(() => {
        if (isLoadingUser) {
            return
        }
        if (unauthenticated) {
            navigate(AUTH_PATHS.signup)
        }

        if (isRoot) {
            navigate(DASHBOARD_PATHS.root)
        }
    }, [isLoadingUser, navigate, unauthenticated])

    return (
        <main>
            <Outlet />
        </main>
    )
}
