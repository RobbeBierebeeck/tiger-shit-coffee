import React, { FC, cloneElement } from 'react'
import { IconProps } from './Icon.types'
import { ICONS_JSX } from './Icon.const'

export const Icon: FC<IconProps> = ({
    icon,
    size = '1.5rem',
    color = 'currentColor',
}) => {
    return cloneElement(ICONS_JSX[icon], {
        size,
        color,
    })
}
