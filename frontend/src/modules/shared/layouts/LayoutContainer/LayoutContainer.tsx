import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
export const LayoutContainer: FC = () => {
    return (
        <section className="u-layout-container">
            <Outlet />
        </section>
    )
}
