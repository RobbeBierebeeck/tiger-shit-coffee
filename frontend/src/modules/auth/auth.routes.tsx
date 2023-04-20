import React from 'react'
import { RouteObject } from 'react-router-dom'
import { AUTH_PATHS } from './auth.const'
import { SignupView } from './views'

export const AUTH_ROUTES: RouteObject = {
    path: AUTH_PATHS.signup,
    element: <SignupView />,
}
