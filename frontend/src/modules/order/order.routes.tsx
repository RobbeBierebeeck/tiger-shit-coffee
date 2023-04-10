import { RouteObject } from 'react-router-dom'
import { LayoutContainer } from '~/shared/layouts'
import React from 'react'
import { OrderView } from '~/order/views'
import { ORDER_PATHS } from '~/order/order.const'

export const ORDER_ROUTES: RouteObject = {
    element: <LayoutContainer />,
    children: [
        {
            path: ORDER_PATHS.root,
            element: <OrderView />,
        },
    ],
}
