import React, { FC } from 'react'
import { IconProps } from './Icon.types'
import { ICONS_JSX } from './Icon.const'

export const Icon: FC<IconProps> = ({
    icon,
    size = '1.5rem',
    color = 'currentColor',
}) => {
    return React.cloneElement(ICONS_JSX[icon], {
        size,
        color,
    })
}
