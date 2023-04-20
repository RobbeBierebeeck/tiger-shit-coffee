import React from 'react'
import {
    Coffee,
    ArrowRight2,
    Setting2,
    LogoutCurve,
    ArrowLeft2,
} from 'iconsax-react'

export enum ICONS {
    coffee = 'coffee',
    arrowRight = 'arrowRight',
    arrowLeft = 'arrowLeft',
    settings = 'settings',
    logout = 'logout',
}

// Robbe: Icons are from : https://iconsax-react.pages.dev/
export const ICONS_JSX = {
    [ICONS.coffee]: <Coffee />,
    [ICONS.arrowRight]: <ArrowRight2 />,
    [ICONS.arrowLeft]: <ArrowLeft2 />,
    [ICONS.settings]: <Setting2 />,
    [ICONS.logout]: <LogoutCurve />,
}
