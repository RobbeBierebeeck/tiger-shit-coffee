import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
export const App: FC = () => {
    return (
        <main>
            <Outlet />
        </main>
    )
}
