import { createBrowserRouter } from 'react-router-dom'
import { App } from '~/app/components/App'
import React from 'react'
import { APP_PATHS } from '~/app/app.const'

export const router = createBrowserRouter([
    {
        path: APP_PATHS.root,
        element: <App />,
    },
])
