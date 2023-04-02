import React from 'react'
import { RouteObject } from 'react-router-dom'
import { LayoutContainer } from '~/shared/layouts'
import { DashboardView } from '~/dashboard/views'
import { DASHBOARD_PATHS } from '~/dashboard/dashboard.const'

export const DASHBOARD_ROUTES: RouteObject = {
    element: <LayoutContainer />,
    children: [
        {
            path: DASHBOARD_PATHS.root,
            element: <DashboardView />,
        },
    ],
}
