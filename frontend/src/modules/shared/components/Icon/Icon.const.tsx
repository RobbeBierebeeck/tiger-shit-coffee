import React from 'react'
import { Coffee, ArrowRight2, Setting2, LogoutCurve } from 'iconsax-react'

export enum ICONS {
    coffee = 'coffee',
    arrowRight = 'arrowRight',
    settings = 'settings',
    logout = 'logout',
}

// Robbe: Icons are from : https://iconsax-react.pages.dev/
export const ICONS_JSX = {
    [ICONS.coffee]: <Coffee />,
    [ICONS.arrowRight]: <ArrowRight2 />,
    [ICONS.settings]: <Setting2 />,
    [ICONS.logout]: <LogoutCurve />,
}
